import { SITIO } from '../datos/sitio.js'
import Icono from './Icono.jsx'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-fondo" aria-hidden="true" />
      <div className="contenedor hero-fila">
        <div className="hero-texto">
          <p className="etiqueta">
            <span className="punto" /> Disponible para nuevos proyectos
          </p>
          <h1>
            Desarrollo web y <span className="resaltado">sistemas a medida</span>
          </h1>
          <p className="hero-bajada">{SITIO.bajada}</p>
          <div className="hero-botones">
            <a href="#proyectos" className="boton boton-primario">
              Ver proyectos <Icono nombre="flecha" tam={18} />
            </a>
            <a
              className="boton boton-borde"
              href={`https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(SITIO.mensajeWhatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icono nombre="whatsapp" tam={18} /> Escribime
            </a>
          </div>
          <ul className="hero-datos">
            <li>
              <strong>2</strong> proyectos completos
            </li>
            <li>
              <strong>React</strong> + Node.js
            </li>
            <li>
              <Icono nombre="ubicacion" tam={16} /> {SITIO.ubicacion}
            </li>
          </ul>
        </div>
        <div className="hero-arte">
          <div className="hero-aro" aria-hidden="true" />
          <img src="/img/logo-ivo.png" alt="Logo de ivo_devlpmt" width="560" height="560" />
        </div>
      </div>
    </section>
  )
}

export default Hero
