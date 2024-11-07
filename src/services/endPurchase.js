// SI HAY UN ERROR, EN CUALQUIERA DE ESTOS PASOS, SE CANCELA, Y NO SE EJECUTA NADA! 
import {
  addDoc,
  collection,
  doc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const endPurchase = async (cart, user) => {
  const productsToUpdateRefs = [];

  // Creamos un array con las referencias de cada producto en el carrito
  for (const cartProduct of cart) {
    const productRef = doc(db, "products", cartProduct.id);
    productsToUpdateRefs.push({ ref: productRef, id: cartProduct.id });
  }

  // Este código crea una referencia a la colección "orders" en Firestore
  const orderCollectionRef = collection(db, "orders");

  // Este código hace una transacción en Firestore para verificar si cada producto en el carrito tiene stock disponible,
  // y se asegura de que el producto exista antes de continuar con la actualización de stock
  try {
    const orderId = await runTransaction(db, async (transaction) => {
      // Creamos un array auxiliar para el stock que será actualizado en el paso 2
      const stocksUpdated = [];

      // 1. Chequeamos el stock de cada producto del carrito
      for (const productToUpdate of productsToUpdateRefs) {
        const { ref } = productToUpdate;
        const product = await transaction.get(ref);

        if (!product.exists()) {
          throw new Error("Product does not exist!");
        }

        // Lo hacemos para saber la cantidad en el carrito
        const productInCart = cart.find(
          (cartElement) => cartElement.id === productToUpdate.id
        );

        // Chequeamos el stock resultante
        const resultStock = product.data().stock - productInCart.quantity;

        if (resultStock < 0) {
          throw new Error(
            `Product: ${product.data().title} doesn't have enough stock. Stock: ${product.data().stock}, quantity added to cart: ${productInCart.quantity}.`
          );
        }

        // Agregamos el resultado al array auxiliar
        stocksUpdated.push({
          productId: productToUpdate.id,
          newStock: resultStock,
        });
      }

      // PASO 2: actualiza el stock de los productos en la base de datos.
      // Recorremos cada producto en productsToUpdateRefs, encuentra el stock actualizado en stocksUpdated,
      // y usa transaction.update para actualizar el stock en la base de datos
      for (const product of productsToUpdateRefs) {
        const { ref, id } = product;
        const stockUpdated = stocksUpdated.find(
          (stock) => stock.productId === id
        );

        transaction.update(ref, {
          stock: stockUpdated.newStock,
        });
      }

      // PASO 3: creamos un objeto order con los productos en el carrito y un usuario.
      // Utilizamos addDoc para agregar la orden a la colección de Firestore y luego se imprime un mensaje de éxito en la consola.
      // También se retorna el ID de la orden creada.
      const order = {
        buyer: user, // Usamos los datos del usuario
        items: cart.map((item) => ({
          id: item.id,
          title: item.nombre,
          price: item.precio,
        })),
        date: serverTimestamp(),
        total: cart.reduce((acc, item) => acc + item.precio * item.quantity, 0),
      };
    
      const docRef = await addDoc(orderCollectionRef, order);
      return docRef.id;
    });

    return orderId; // retornamos el ID de la orden acá
  } catch (e) {
    console.error("Transaction failed: ", e);
    throw e;
  }
};

export default endPurchase;


