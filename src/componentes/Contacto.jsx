import { SITIO } from '../datos/sitio.js'
import Icono from './Icono.jsx'

function Contacto() {
  const enlaceWhatsapp = `https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(SITIO.mensajeWhatsapp)}`
  return (
    <section id="contacto" className="seccion seccion-alt">
      <div className="contenedor">
        <div className="contacto">
          <p className="seccion-etiqueta">// contacto</p>
          <h2>¿Tenés una idea o un negocio para digitalizar?</h2>
          <p>Contame qué necesitás y vemos cómo resolverlo. La consulta no tiene costo.</p>
          <div className="contacto-botones">
            <a className="boton boton-primario boton-grande" href={enlaceWhatsapp} target="_blank" rel="noopener noreferrer">
              <Icono nombre="whatsapp" tam={20} /> WhatsApp {SITIO.whatsappVisible}
            </a>
            <a className="boton boton-borde boton-grande" href={SITIO.github} target="_blank" rel="noopener noreferrer">
              <Icono nombre="github" tam={20} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
