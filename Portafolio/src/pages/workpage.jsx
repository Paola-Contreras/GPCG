import React from 'react'
import '../style/work.css'

import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

import W1 from '../images/w1.png'
import W2 from '../images/w2.png'
import W3 from '../images/w3.png'
import W4 from '../images/w4.png'
import W5 from '../images/w5.png'

const Work = ({ setOnShow }) => {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty(
      '--scroll',
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight),
    )
  }, false)

  return (
    <div className="main">
      <Header setOnShow={setOnShow} />
           
      <div className="body">
        <br />

        <div className="Work">
          <img src={W2} id="img_work" alt="" />
          <div className="description">
            <h1>Dibujo utilizando Css</h1>
            <p>
              Para este trabajo opte realice un dibujo utilizando unicamente html y css.
              Para recrear cada triangulo se utilizaron las propiedades de height y width.
              Así mismo, se utilizo rotate para poder girar estos y colocarlo en su espacio
              correspondiente. Finalmente, quiero destacar que este fue mi primer proyecto
              utilizando dicho lenguaje.
              {' '}

            </p>
            <a href="http://juanelcaballo.club/20213/Lab04/">Ver Proyecto</a>
          </div>
        </div>

        <div className="Work">
          <img src={W4} id="img_work" alt="" />
          <div className="description">
            <h1>Replicando una página web</h1>
            <p>
              Este proyecto se solicito reallizar una replica exacta de una página web. Para
              este opte por recrear la antigua página de Pangea, una página de venta de joyeria
              fina.En un inicio esta fue algo complicada pues no habia realizado proyectos con
              tanto detalle. Sin embargo, este me permitio concer e implementar nuevas funciones
              como fue google-fonts y favicons
            </p>
            <a href="https://juanelcaballo.club/20213/Proyectoo1.2/">Ver Proyecto</a>
          </div>
        </div>

        <div className="Work">
          <img src={W3} id="img_work" alt="" />
          <div className="description">
            <h1>Juego de memoria</h1>
            <p>
              Este proyecto es un juego de memoria de marvel, el cual fue desarrollado implementando
              la tecnología de react. Con este proyecto aprendía a conectar las 3 tecnologías mencionadas
              anteriormente además me permitio jugar un poco más con lo que es css.
            </p>
            <a href="http://juanelcaballo.club/20213/Lab06/">Ver Proyecto</a>
          </div>
        </div>

        <div className="Work">
          <img src={W5} id="img_work" alt="" />
          <div className="description1">
            <h1>Calculadora</h1>
            <p>
              Este proyecto consitio en crear una calculadora la cual permitiera realizar las operaciones
              básicas, para este se utilizo react, html y css. Cabe destacar que para realizar las operaciones
              se utilizo la funcion eval y el para manejo de datos se utilizaron los states que react nos brinda.
            </p>
            <a id="btnblack" href="https://juanelcaballo.club/20213/Lab09/">Ver Proyecto</a>
          </div>
        </div>

        <div className="Work">
          <img src={W1} id="img_work" alt="" />
          <div className="description1">
            <h1>Laberinto</h1>
            <p>
              Este proyecto consiste en un laberinto, el cual puede modificar su altura y ancho
              al gusto del jugador. Para este se utilizo react, html y css cabe destacar que fue
              una introducción al uso de backend y fetch. Por otro lado, para el diseño de este
              se utilizo emotion style y webpack.
            </p>
            <a id="btnblack" href="http://juanelcaballo.club/20213/Lab07/">Ver Proyecto</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Work
