import React, { useState } from "react";
import {Row, Form, FormControl, Button} from "react-bootstrap";
import Character from "./Mascotas_Tarjeta";
import axios from 'axios';


const Main = ({perros , setPerros}) => {



    const [buscador, setBuscador] = useState("");

    const handleChange = (event) => {
    setBuscador(event.target.value);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    axios
        .get(`https://app-adoptando.herokuapp.com/search/${buscador}`)
        .then((result) => setPerros(result.data));

        setBuscador("");
    };


return (

    <div>

<Form className="d-flex" onSubmit={handleSubmit}>

            <FormControl
            type="search"
            placeholder="Buscar Raza/Tamaño"
            className="buscador-form"
            aria-label="Search"
            onChange={handleChange}
            value={buscador}
            />
            <Button className="boton-buscador" type="submit" >Buscar</Button>

            <Button className="boton-buscador" href="/mascotas" >Todos</Button>

    </Form>

        
    <Row className="row" id="Row" >
    {perros.map(element => <Character personaje = {element}/> ) }
    </Row>

    </div>
);

};

export default Main;