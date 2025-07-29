import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Blog_form from './Blog_form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog_form/>
  </StrictMode>,
)
