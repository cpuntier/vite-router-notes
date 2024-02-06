import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Profile from './pages/Profile'
import Nav from './components/Nav';

import './App.css'

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/profile/:name" element = {<Profile/>}/>
        <Route path = "/profile" element = {<Profile/>}/>

      </Routes>
    </div>
  )
}

export default App;