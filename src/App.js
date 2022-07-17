import React from 'react';
import NavBar from "./components/NavBar";
import Home from './components/Home';
import Mascotas from './components/Mascotas';
import Formulario from './components/Formulario';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";



function App() {

  const [perros, setPerros] = useState([])


  useEffect(() => {
    
      const getPerros = async () =>{
          const {data} = await axios.get(process.env.REACT_APP_SERVER)
          /*const {data} = await axios.get(process.env.DEPLOY_FRONT)*/
          setPerros(data.perros)
      }
      getPerros()
    
  }, [] );

 
  

  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mascotas" element={<Mascotas perros={perros} setPerros={setPerros} />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
    </>

  );
}
export default App;
