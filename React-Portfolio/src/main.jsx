import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import 'remixicon/fonts/remixicon.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='Container mx-auto px-10'>
    <Navbar />
    <App />
    </div>
  </StrictMode>,
)
