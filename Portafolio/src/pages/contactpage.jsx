import React from 'react'
import '../style/contact.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Social from '../components/socialPool.jsx'

const Contact = ({ setOnShow }) => {
  return (
    <div className="main1">
      <Header setOnShow={setOnShow} />
      <div className="conteiner1">
               
        <div className="Text1">
          <h2> Trabajemos juntos para volver algo realidad!</h2>
          <p>Busco oportunidades para colaborar o trabajar con empresas, agencias o personas particulares.</p>
          <p>Si deseas saber más de mis trabajos no dude en comunicarse a través de cualquiera de las siguientes plataformas:</p>
        </div>
        <div className="Social">
          {Social.map((item) => {
            return (
              <div className="social_map" key={item.key}>
                <img src={item.src} alt="" />
                <a href={item.href}>{item.name}</a>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
        
  )
}

export default Contact
