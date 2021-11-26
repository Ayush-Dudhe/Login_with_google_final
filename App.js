import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import Login from './components/Login'
import Homepage from './components/Homepage'
// import Navbar from './components/Elements/Navbar/Navbar'
import Annotations from './pages/Annotaions/Annotations';
import CreatePipeline from './pages/CreatePipeline/CreatePipeline';
import Dashboard from './pages/Dashboard/Dashboard';
import Notebooks from './pages/Notebooks/Notebooks';
import Pipelines from './pages/Pipelines/Pipelines'

const App = () => {
  return (


    <Router>
       {/* <Navbar/> */}
      {/* <div> */}
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Annotations" element={<Annotations />} />
        <Route path="/CreatePipeline" element={<CreatePipeline />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Notebooks" element={<Notebooks />} />
        <Route path="/Pipelines" element={<Pipelines/>} />
        </Routes>
      {/* </div> */}
     </Router>
   
    
  )
}

export default App
