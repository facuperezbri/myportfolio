import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { About, Hero, Navbar, Projects, Skills } from './components'

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='skills' element={<Skills />} />
    </Routes>
  </>
)


export default App
