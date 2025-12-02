import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'sweetalert2/dist/sweetalert2.js'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './page/home/Home.jsx'
import ErrorPage from './page/home/ErrorPage.jsx'
import Pricing from './page/home/Pricing.jsx'
import Explore from './page/home/Explore.jsx'
import Blogs from './page/home/Blogs.jsx'
import CompanyLogos from './page/home/CompanyLogos.jsx'
import Registration from './components/Registration.jsx'
import Login from './components/Login.jsx'
import Authprovider from './context/AuthContext.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Dashboard from './page/dashboard/Dashboard.jsx'
import Cart from './page/cart/Cart.jsx'
import Form from './page/form/Form.jsx'


createRoot(document.getElementById('root')).render(
  <Authprovider>
    <BrowserRouter>
   <Routes>

    {/* main layout */}
    <Route element={<App/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/pricing' element={<Pricing/>}/>
     <Route path='/services' element={<Explore/>}/>
     <Route path='/blogs' element={<Blogs/>}/>
     <Route path='/companyLogos' element={<CompanyLogos/>}/>

     {/* error page */}
     <Route path='*' element={<ErrorPage/>}/>
    </Route>

    
    {/* authentication */}
     <Route path='/register' element={<Registration/>}/>
     <Route path='/login' element={<Login/>}/>

     {/* dashbord */}
     
      <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
      <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
      <Route path='/form' element={<PrivateRoute><Form/></PrivateRoute>}/>
     
    </Routes>
   </BrowserRouter>
  </Authprovider>
) 