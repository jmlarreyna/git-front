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


)
}


export default Home;