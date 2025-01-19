// Elements
import ConnectScreen from './Connect.tsx';
// Other imports
import { ReactElement, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConnectScreen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
