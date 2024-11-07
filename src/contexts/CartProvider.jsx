import { createContext, useState } from "react";

// 1. Creamos el contexto
export const CartContext = createContext();

// 2. Creamos el componente que va a proveer ese contexto
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar un producto al carrito
    const addCart = (product, productQuantity) => {
        const productInCart = isInCart(product.id);

        let cartUpdated = [...cart];

        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity
                    };
                }
                return cartProduct;
            });
        } else {
            cartUpdated.push({ ...product, quantity: productQuantity });
        }
        
        setCart(cartUpdated);
    };

    // Verificamos si el producto ya está en el carrito
    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId);
    };
    
    // Función para actualizar la cantidad de los productos en el carrito
    const updateQuantity = (productId, newQuantity) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
        );
    };

    // Función para eliminar un producto del carrito
    const removeItem = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addCart, updateQuantity, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;



