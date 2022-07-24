import React from "react";
import { Carousel, Button } from "react-bootstrap";
import back from "./Img_Logo/back7.png"


const Home = () => {


return(

  

  <div className="flex-container">  

    <div className="principales">

      <div className="text-container">

      <span className="titulo">ADOPTA !</span>

      <span className="sub_titulo">Hace click y conocé a todos nuestros perros</span>

      <Button className="boton_principal" href="/mascotas"> Empezar</Button>

      </div>


    </div>



      <div className="principales">

        <div className="imagen-container">

            <img src={back} className="fotoindex" />

        </div>

      </div>

  </div>


      /* <div className="especial" >
        <Carousel>
          <Carousel.Item interval={3000} controls="false">
            <img
              className="d-block w-100"
              src={refugio}
            />

          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={refugio}
            />
          
          </Carousel.Item>

          <Carousel.Item interval={3000} > 
            <img
              className="d-block w-100"
              src={refugio}
            />

          </Carousel.Item>
        </Carousel>
    </div>

    <div className="flex-container2">
      <div className="especial">
        <h1>
          ¡Bienvenidos a ADOPTANDO!
          </h1>
        
        <p>
          Somos una organización sin fines de lucro que busca darle un hogar a todos los perritos que la comunidad nos acerca. Nuestra propuesta es muy sencilla,
          si pensas que podés ser un buen candidato para alguno de ellos, llená el formulario y te contactaremos para coordinar una visita.
        </p>

        <p>
        ¡Hacé click más abajo y conocé a todas las patitas que están esperando ser adoptadas!
        </p>

        <Button className='normal' style={{ width: '50%'  }} size="sm" href="/mascotas" >EMPEZAR!</Button>



      </div> 
  
    </div>*/

)
}


export default Home;