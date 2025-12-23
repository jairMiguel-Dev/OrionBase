import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './Pages/Home'
import React from './Pages/React'
import TypeScript from './Pages/TypeScript'
import MUI from './Pages/MUI'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/React" element={<React />} />
        <Route path="/TypeScript" element={<TypeScript />} />
        <Route path="/MUI" element={<MUI />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
