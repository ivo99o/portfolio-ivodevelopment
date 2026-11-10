import { useEffect, useState } from 'react'
import { NAVEGACION, SITIO } from '../datos/sitio.js'
import Logo from './Logo.jsx'
import { irASeccion } from '../utils.js'

function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const [conFondo, setConFondo] = useState(false)

  useEffect(() => {
    const alScroll = () => setConFondo(window.scrollY > 12)
    alScroll()
    window.addEventListener('scroll', alScroll, { passive: true })
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  const ir = () => setAbierto(false)

  return (
    <header className={`navbar ${conFondo || abierto ? 'con-fondo' : ''}`}>
      <div className="contenedor navbar-fila">
        <a href="#inicio" className="navbar-logo" onClick={ir} aria-label={SITIO.nombre}>
          <Logo />
        </a>
        <button
          type="button"
          className="navbar-menu"
          aria-expanded={abierto}
          aria-label="Abrir menú"
          onClick={() => setAbierto(!abierto)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`navbar-enlaces ${abierto ? 'abierto' : ''}`}>
          {NAVEGACION.map((e) => (
            <a
              key={e.id}
              href={`#${e.id}`}
              onClick={(ev) => {
                ir()
                irASeccion(e.id, ev)
              }}
            >
              {e.texto}
            </a>
          ))}
          <a
            className="boton boton-primario boton-chico"
            href={`https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(SITIO.mensajeWhatsapp)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
