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
            placeholder="Buscar por Raza o Tamaño"
            className="me-2"
            aria-label="Search"
            onChange={handleChange}
            value={buscador}
            />
            <Button type="submit" variant="outline-success">Buscar</Button>

            <Button href="/mascotas" variant="outline-success">Todos</Button>

    </Form>

        
    <Row className="row" id="Row" >
    {perros.map(element => <Character personaje = {element}/> ) }
    </Row>

    </div>
);

};

export default Main;