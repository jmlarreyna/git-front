import axios from "axios";
import React from "react";
import { useState } from "react";
import {Form, Button,Row} from 'react-bootstrap';
import back_form from "./Img_Logo/form.png"



const Formulario = () => {
    const[inputs, setInputs] = useState ({  
    nombre: "",
    apellido: "",
    edad: "",
    residencia: "",
    comentarios:""
    });


const handleChange = (e) => {
    setInputs({
        ... inputs,
        [e.target.name]: e.target.value
    })
};


const handleClick = async () => {
await axios.post("http://localhost:3001/formulario", inputs)
    /*await axios.post(process.env.DEPLOY_FRONT + "/crear", inputs)*/

    setInputs({
        
    nombre: "",
    apellido: "",
    edad: "",
    residencia: "",
    comentarios:""

    })
};


return(


<div className="flex-container"> 
    
        
        <div className="principales">

            <div className="imagen-container">

                <img src={back_form} className="fotoform" />

            </div>

        </div>



        

        <div className="principales">


            <div className="formulario">

            <span className="texto_form">
                Completá tus datos y te llamaremos para hacer una visita:</span>

                
                <div>


                    {Object.keys(inputs).map((key, index) => (
            
                    <Row className="bloque_form">

                        <Form.Group  className="inputs" key={index} style={{maxWidth:"200px"}}>

                        <Form.Label>{key[0].toUpperCase() + key.slice(1)}</Form.Label>
                        <Form.Control className="titulo_input"
                        name= {key} 
                        value={inputs[key]} 
                        onChange={handleChange}
                        />            

                        </Form.Group>

                    </Row>
                    ))}

                </div>

                <Button className="boton_form" onClick ={handleClick}>Enviar</Button>
            </div>

        </div>
</div>    
);
};

export default Formulario;

