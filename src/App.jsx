import { useState } from 'react'
import './App.css'
import enicon from './img/en.png'
import esicon from './img/es.png'
import prof from './img/profile_user.jpg'
import quotesgif from './img/quotes.gif'
import weathergif from './img/Weather.gif'
import pokegif from './img/pokedex.gif'
import rickgif from './img/rickandmorty.gif'


function App() {
  const [isSpanish, setIsSpanish] = useState(true)

  const handleClick = () => {
    setIsSpanish(!isSpanish);
  }
  return (
   isSpanish ? 
    <div>

      <header className="hero">
        <div className="hero__navbar">
          <nav>
            <a href="#aboutme">Acerca de mí</a>
            <a href="#study">Estudios</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
        <div className="hero__container">
          <div className='hero__lang-container'>
            <button onClick={handleClick}>
              {isSpanish ? <img src={esicon} alt="spanish icon" /> : <img src={enicon} alt="english icon" />}
            </button>
          </div>
          <div className="hero__img-container">
            <img src={prof} alt="imagen de perfil" />
          </div>
          <div className="hero__info">
            <h1 className="hero__title">Hola, soy Santiago J.</h1>
            <h2 className="hero__subtitle">Desarrollador Front-End</h2>
            <div className="hero__social">
              <a href="https://www.linkedin.com/in/santiago-jaramillo-henao-21b444b7/"><i className='bx bxl-linkedin'></i></a>
              <a href="https://github.com/Sanyway"><i className='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
      </header>

      <main className="wrapper">
        <section className="about">
          <h2 className="about__title" id="aboutme">Acerca de Mí</h2>
          <p className="about__text">Saludos, soy desarrollador Full Stack especializado en Front-end con React. Mi objetivo es crear experiencias web que cautiven y sorprendan a los usuarios. Me apasiona el proceso creativo y siempre estoy en busca de nuevas formas de mejorar y superar desafíos. Creo en la fuerza del trabajo en equipo y en la comunicación efectiva para alcanzar grandes resultados y siempre estoy emocionado por explorar nuevas tecnologías y enfrentar proyectos interesantes. ¡Listo para dejar mi marca en el mundo digital!</p>
        </section>

        <section className="study">
          <h2 className="study__title" id="study">Mis Estudios</h2>
          <p className="study__text">Estudié en la reconocida escuela de programación Academlo, donde obtuve conocimientos en desarrollo Full Stack. Mi enfoque principal se centra en el front end con React, donde puedo dar vida a mis ideas y crear experiencias cautivadoras. Además, he completado varios cursos online de edición de fotografía y video, lo que me permite agregar un toque creativo a mis proyectos. </p>
        </section>

        <section className="skills" id="skills">
          <h2 className="skills__title">Mis Habilidades</h2>
          <div className="skills__container">
            <ul className="skills__list">
              <li><span>90%</span>_____________________React</li>
              <li><span>80%</span>_______________JavaScript</li>
              <li><span>80%</span>____________________HTML</li>
              <li><span>90%</span>______________________CSS</li>
            </ul>
          </div>
        </section>

        <section className="projects">
          <h2 className="projects__title" id="projects">Proyectos</h2>
          <div className="projects__container">
            <div className="projects__box">
              <a href="https://aleatoryquote.netlify.app/">
                <h3>Aleatory Quotes</h3>
                <img src={quotesgif} alt="Random Quote" />
              </a>
            </div>

            <div className="projects__box">
              <a href="https://weather-app-san.netlify.app/">
                <h3>Weather App</h3>
                <img src={weathergif} alt="Weather App" />
              </a>
            </div>

            <div className="projects__box">
              <a href="https://poke-api-san.netlify.app/">
                <h3>Poke App</h3>
                <img src={pokegif} alt="Poke App" />
              </a>
            </div>


            <div className="projects__box">
              <a href="https://rick-and-morty-app4.netlify.app/">
                <h3>Rick And Morty App</h3>
                <img src={rickgif} alt="Rick And Morty" />
              </a>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2 className="contact__title" id="contact">Contacto</h2>
          <div className="contact__info">
            <ul>
              <li><strong>Correo electrónico:</strong> sanyju85@gmail.com</li>
              <li><strong>Teléfono y Whatsapp:</strong> (+57) 314 606 20 71</li>
              <li><strong>País:</strong> Colombia</li>
              <li><strong>Ciudad</strong> Medellín</li>
              <li className="back__home"><a href="#">Volver al Inicio</a></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
   : 


   /* ---------------------------- English Translation ---------------------------*/
   <div>
  <header className="hero">
    <div className="hero__navbar">
      <nav>
        <a href="#aboutme">About Me</a>
        <a href="#study">Studies</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
    <div className="hero__container">
      <div className='hero__lang-container'>
        <button onClick={handleClick}>
          {isSpanish ? <img src={esicon} alt="Spanish icon" /> : <img src={enicon} alt="English icon" /> }
        </button>
      </div>
      <div className="hero__img-container">
        <img src={prof} alt="Profile Image" />
      </div>
      <div className="hero__info">
        <h1 className="hero__title">Hi, I'm Santiago J.</h1>
        <h2 className="hero__subtitle">Front-End Developer</h2>
        <div className="hero__social">
          <a href="https://www.linkedin.com/in/santiago-jaramillo-henao-21b444b7/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Sanyway"><i className='bx bxl-github'></i></a>
        </div>
      </div>
    </div>
  </header>

  <main className="wrapper">
    <section className="about">
      <h2 className="about__title" id="aboutme">About Me</h2>
      <p className="about__text">Hello, I'm a Full Stack Developer specialized in Front-end development with React. My goal is to create web experiences that captivate and surprise users. I'm passionate about the creative process and always seeking new ways to improve and overcome challenges. I believe in the power of teamwork and effective communication to achieve great results, and I'm always excited to explore new technologies and take on interesting projects. Ready to make my mark in the digital world!</p>
    </section>

    <section className="study">
      <h2 className="study__title" id="study">My Studies</h2>
      <p className="study__text">I studied at the renowned programming school Academlo, where I gained knowledge in Full Stack development. My primary focus is on front-end development with React, where I can bring my ideas to life and create captivating experiences. Additionally, I have completed various online courses in photo and video editing, allowing me to add a creative touch to my projects.</p>
    </section>

    <section className="skills" id="skills">
      <h2 className="skills__title">My Skills</h2>
      <div className="skills__container">
        <ul className="skills__list">
          <li><span>90%</span>_____________________React</li>
          <li><span>80%</span>_______________JavaScript</li>
          <li><span>80%</span>____________________HTML</li>
          <li><span>90%</span>______________________CSS</li>
        </ul>
      </div>
    </section>

    <section className="projects">
      <h2 className="projects__title" id="projects">Projects</h2>
      <div className="projects__container">
        <div className="projects__box">
           <a href="https://aleatoryquote.netlify.app/">
                <h3>Aleatory Quotes</h3>
                <img src={quotesgif} alt="Random Quote" />
              </a>
            </div>

            <div className="projects__box">
              <a href="https://weather-app-san.netlify.app/">
                <h3>Weather App</h3>
                <img src={weathergif} alt="Weather App" />
              </a>
            </div>

            <div className="projects__box">
              <a href="https://poke-api-san.netlify.app/">
                <h3>Poke App</h3>
                <img src={pokegif} alt="Poke App" />
              </a>
            </div>


            <div className="projects__box">
              <a href="https://rick-and-morty-app4.netlify.app/">
                <h3>Rick And Morty App</h3>
                <img src={rickgif} alt="Rick And Morty" />
              </a>
        </div>
      </div>
    </section>

    <section className="contact">
      <h2 className="contact__title" id="contact">Contact</h2>
      <div className="contact__info">
        <ul>
          <li><strong>Email:</strong> sanyju85@gmail.com</li>
          <li><strong>Phone and WhatsApp:</strong> (+57) 314 606 20 71</li>
          <li><strong>Country:</strong> Colombia</li>
          <li><strong>City:</strong> Medellin</li>
          <li className="back__home"><a href="#">Back to Home</a></li>
        </ul>
      </div>
    </section>
  </main>
</div>

  )
}

export default App
