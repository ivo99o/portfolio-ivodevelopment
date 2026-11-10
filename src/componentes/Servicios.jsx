import { SERVICIOS } from '../datos/sitio.js'
import Icono from './Icono.jsx'

function Servicios() {
  return (
    <section id="servicios" className="seccion seccion-alt">
      <div className="contenedor">
        <header className="seccion-cabecera">
          <p className="seccion-etiqueta">// servicios</p>
          <h2>Qué puedo hacer por tu negocio</h2>
          <p>Desde una página simple hasta un sistema completo para llevar tu trabajo al día.</p>
        </header>
        <div className="servicios">
          {SERVICIOS.map((s) => (
            <article key={s.titulo} className="servicio">
              <span className="servicio-icono">
                <Icono nombre={s.icono} tam={26} />
              </span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
