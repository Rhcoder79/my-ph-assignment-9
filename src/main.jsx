import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import { ToastContainer } from 'react-toastify';
import AuthProvider from './provider/AuthProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS file
AOS.init({
     duration: 1000, 
     once: false,    
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  <ToastContainer />
    </AuthProvider>

  </StrictMode>,
)
