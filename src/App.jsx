import { useState } from 'react';
import React from 'react';
// import reactLogo from './assets/react.svg';
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import './App.css'
import { EducationBar } from './components/educationbar';
import {GrAddCircle} from "react-icons/gr"
import { IconContext } from 'react-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from './components/navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
