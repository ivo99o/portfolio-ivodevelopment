import { PROYECTOS } from '../datos/proyectos.js'
import Galeria from './Galeria.jsx'
import Icono from './Icono.jsx'

function Proyectos() {
  return (
    <section id="proyectos" className="seccion">
      <div className="contenedor">
        <header className="seccion-cabecera">
          <p className="seccion-etiqueta">// proyectos</p>
          <h2>Cosas que construí</h2>
          <p>Sistemas reales, pensados de punta a punta: diseño, base de datos, lógica y publicación.</p>
        </header>
        <div className="proyectos">
          {PROYECTOS.map((p, i) => (
            <article key={p.id} className={`proyecto ${i % 2 ? 'invertido' : ''}`}>
              <div className="proyecto-media">
                <Galeria imagenes={p.imagenes} titulo={p.titulo} />
              </div>
              <div className="proyecto-info">
                <span className="chip chip-azul">{p.etiqueta}</span>
                <h3>{p.titulo}</h3>
                <p>{p.descripcion}</p>
                <ul className="proyecto-puntos">
                  {p.puntos.map((punto) => (
                    <li key={punto}>
                      <Icono nombre="tilde" tam={16} trazo={2.400} />
                      {punto}
                    </li>
                  ))}
                </ul>
                <ul className="proyecto-tecnologias">
                  {p.tecnologias.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.nota && <p className="proyecto-nota">{p.nota}</p>}
                <div className="proyecto-enlaces">
                  {p.enlaces.map((e) => (
                    <a
                      key={e.url}
                      className={`boton ${e.tipo === 'demo' ? 'boton-primario' : 'boton-borde'}`}
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icono nombre={e.tipo === 'demo' ? 'enlace' : 'codigo'} tam={18} />
                      {e.texto}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
