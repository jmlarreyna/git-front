import React from 'react';
import { Card,Col,Button, } from "react-bootstrap";
import logo from "./Img_Logo/paw.png";


const Mascota_T = (props) =>{

    const perro = props.personaje



    return (


    <Col className="d-flex justify-content-center" xs={8} md={4} lg={2} >
        

    <Card style={{ width: '100%' }}>
    <Card.Img variant="top" height="200px" src= {process.env.PUBLIC_URL+perro.foto} />
    <Card.Body>


        
        <Card.Title className='tarjeta_titulo'>{perro.nombre}</Card.Title>



        <div className='razadeperros'>


            <img className='logo' src={logo}/>

        
            <Card.Text className='tarjeta'>{"Raza: "+perro.raza}</Card.Text>

        </div>
        
        
        <div className='razadeperros'>


            <img className='logo' src={logo}/>
            
            <Card.Text className='tarjeta'>{"Tamaño: "+perro.tamaño}</Card.Text>
        
        </div>


        <div className='razadeperros'>

            <img className='logo' src={logo}/>

            <Card.Text className='tarjeta'>{"Edad: "+perro.edad}</Card.Text>

        </div>

        
        <Col className="d-flex justify-content-end">

        <Button className='boton_tarjeta' href="/formulario" >Adoptar!</Button>
        </Col>

    </Card.Body>
    
    
    </Card>
    
    </Col>
    
        );

}


    export default Mascota_T;


