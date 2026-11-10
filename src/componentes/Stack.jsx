import { STACK } from '../datos/sitio.js'

function Stack() {
  return (
    <section id="herramientas" className="seccion">
      <div className="contenedor">
        <header className="seccion-cabecera">
          <p className="seccion-etiqueta">// herramientas</p>
          <h2>Las herramientas con las que trabajo</h2>
          <p>Tecnologías modernas que uso para que tu sitio o sistema sea rápido, seguro y fácil de mantener.</p>
        </header>
        <div className="stack">
          {STACK.map((g) => (
            <div key={g.grupo} className="stack-grupo">
              <h3>{g.grupo}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it} className="chip">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
