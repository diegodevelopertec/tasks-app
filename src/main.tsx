import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  {BrowserRouter}  from 'react-router-dom'
import { ContextProvider } from './context/index.tsx'
import { ContextUIProvider } from './contextUI/index.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
 <ContextUIProvider>
  <ContextProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <ToastContainer position='top-center'  theme='colored' />
    </React.StrictMode>,
    </BrowserRouter>
    </ContextProvider>
 </ContextUIProvider>

)
