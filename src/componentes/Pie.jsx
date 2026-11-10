import { SITIO } from '../datos/sitio.js'
import Logo from './Logo.jsx'

function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor pie-fila">
        <Logo />
        <p>
          {SITIO.ubicacion} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Pie
