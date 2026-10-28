import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { injectTokens } from './tokens'
import App from './App.tsx'

injectTokens()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
