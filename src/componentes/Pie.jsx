import { SITIO } from '../datos/sitio.js'

function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor pie-fila">
        <p>Página creada por Iván Mena</p>
        <p>
          {SITIO.ubicacion} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Pie
