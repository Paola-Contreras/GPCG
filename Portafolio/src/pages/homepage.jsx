import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import pic from '../images/Pic.png'
import '../style/homepage.css'
import arr from '../components/imgPool.jsx'

const Home = ({ setOnShow }) => {
  return (
    <div className="main">
      <Header setOnShow={setOnShow} />
            
      <div className="pic">
        <img src={pic} alt="" />
      </div>

      <div className="Text">
        <h4>
          Hola, me llamo Gabriela Paola Contreras Guerra. Actualmente me encuentro estudiando
          ingeniería en ciencias de la computación.
        </h4>
        <p>
          Soy una persona organizada, meticulosa y prudente, entre mis principales cualidades se
          encuentran la diciplina y la perseverancia pues me gusta plasmarme metas y trabajar para cumplir estas.
        </p>
        <p>
          Mi forma de aprender moderada pues no me gusta avanzar hasta comprender de forma general un tema, cabe
          destacar que aprendo un poco más rápido por medio de la práctica. Sin embargo, siempre me gusta entregar
          trabajos de excelencia dando a conocer mis habilidades.
        </p>
        <p>
          En lo personal no me gusta definirme por los trabajos que he realizado pues siempre me encuentro abierta
          a probar nuevas cosas y a cambiar aquello que se puede mejorar. Como mencione anteriormente, me encuentro
          aprendiendo por lo que no puedo catalogarme como experta en las tecnologías con las que he trabajado.
        </p>
        <p>
          Lo que me impulsa a trabajar y aprender más sobre el ámbito tecnológico es que este no se limita a un solo campo,
          sino que puede aplicarse a mis pasatiempos, intereses, entre otros.
        </p>
        <p>
          Para conocer un poco más de mi experiencia, habilidades y educación pueden leer el documento adjunto a continuación
        </p>
        <a
          href="https://drive.google.com/file/d/19_7LgE_6p7_Bdg4SvGSEqWA1L7UJtWow/view?usp=sharing"
          className="Cv"
        >
          {' '}
          Ver CV
        </a>
      </div>
            
      <div className="technology">
        <h3>Tecnologias con las que he trabajado:</h3>
        <div className="img_conteiner">
          {arr.map((item) => {
            return (
              <img key={item.key} src={item.src} alt="" />
            )
          })}
        </div>
      </div>
    
      <Footer />

    </div>
  )
}

export default Home
