import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Timeline from './pages/Timeline'

function App() {
  return (
    <BrowserRouter basename='ReactPortefolje'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}></Route>
          <Route path="Timeline" element={<Timeline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App