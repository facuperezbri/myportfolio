import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { About, Hero, Navbar } from './components'

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='about' element={<About />} />
    </Routes>
  </>
)


export default App
