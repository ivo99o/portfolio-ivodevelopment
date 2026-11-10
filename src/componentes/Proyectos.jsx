import { PROYECTOS } from '../datos/proyectos.js'
import ProyectoTarjeta from './ProyectoTarjeta.jsx'

function Proyectos() {
  return (
    <section id="proyectos" className="seccion">
      <div className="contenedor">
        <header className="seccion-cabecera">
          <p className="seccion-etiqueta">// proyectos</p>
          <h2>Cosas que construí</h2>
          <p>Sistemas completos, desde el diseño hasta la publicación.</p>
        </header>
        <div className="proyectos">
          {PROYECTOS.map((p) => (
            <ProyectoTarjeta key={p.id} proyecto={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
