// Renderizamos el Layout y el ItemListContainer. Configuramos las rutas 

import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import NotFound from './components/NotFound.jsx';
import Layout from './components/Layout.jsx';
import Cart from './components/Cart.jsx';
import CartProvider from './contexts/CartProvider.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <CartProvider>
          <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </CartProvider>
    
  );
}


export default App;
