import { Routes, Route } from 'react-router-dom'; 
import NavBar from './components/organisms/Navbar'; 
import Home from './pages/Home'; 
import Login from './pages/Login';
import Registro from './pages/Registro';
import Products from './components/organisms/Products'; 
import ProductDetail from './pages/ProductDetail';
import './styles/templates/global.css';
import Carrito from './pages/Carrito';
function App() { 
 return ( 
   <> 
     <NavBar /> 
     <Routes> 
       <Route path="/Products" element={<Products />} /> 
       <Route path="/products/:id" element={<ProductDetail />} />
       <Route path="/" element={<Home />} /> 
       <Route path="/login" element={<Login/>} />
       <Route path="/registro" element={<Registro/>} />
       <Route path="/carrito" element={<Carrito />} />
     </Routes> 
   </> 
 ); 
} 
 
export default App;