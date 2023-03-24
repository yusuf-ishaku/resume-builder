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
import { Contact } from './pages/contact';
import { Pricing } from './pages/pricing';
import { Templates } from './pages/templates';
import { About } from './pages/about-us';
import { T1 } from './pages/t1';
import { createContext} from "react";

export const AppContext = createContext();
function App() {
  const [fly, setFly] = useState(true);

  return (
    <div className="App">
      <AppContext.Provider value={{fly, setFly}}>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/pricing' element={<Pricing></Pricing>}></Route>
            <Route path='/templates' element={<Templates></Templates>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/template1' element={<T1></T1>}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
