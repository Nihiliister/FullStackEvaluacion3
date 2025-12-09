import { Routes, Route, Outlet, Navigate } from 'react-router-dom'; 
import NavBar from './components/organisms/Navbar'; 
import Home from './pages/Home'; 
import Login from './pages/Login';
import Registro from './pages/Registro';
import Products from './components/organisms/Products'; 
import ProductDetail from './pages/ProductDetail';
import './styles/templates/global.css';
import Carrito from './pages/Carrito';
import Footer from './components/organisms/Footer';
import Pago from './pages/Pago';
import AdminPanel from './pages/AdminPanel';

function App() { 

  const usuario = JSON.parse(localStorage.getItem("usuario"));

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
       <Route path='/pago' element={<Pago/>}/>
       <Route path='/admin' element={
                    usuario?.rol === "admin" 
                    ? <AdminPanel/>
                    : < Navigate to="/products"/>
                    }/>
     </Routes> 

     <div style={{minHeight: "80vh"}}>
      <Outlet/>
     </div>
     <Footer/>
   </> 
 ); 
} 
 
export default App;