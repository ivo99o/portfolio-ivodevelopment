import { useState } from 'react'
import { VistaPrevia, Visor } from './Galeria.jsx'
import Icono from './Icono.jsx'

function ProyectoTarjeta({ proyecto }) {
  const [visorAbierto, setVisorAbierto] = useState(false)
  const p = proyecto

  return (
    <article className="proyecto">
      <VistaPrevia imagenes={p.imagenes} titulo={p.titulo} onAbrir={() => setVisorAbierto(true)} />
      <div className="proyecto-info">
        <span className="chip chip-azul">{p.etiqueta}</span>
        <h3>{p.titulo}</h3>
        <p>{p.descripcion}</p>
        <ul className="proyecto-tecnologias">
          {p.tecnologias.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        {p.nota && <p className="proyecto-nota">{p.nota}</p>}
        <div className="proyecto-enlaces" style={{ '--columnas': p.enlaces.length + 1 }}>
          {p.enlaces
            .filter((e) => e.tipo === 'demo')
            .map((e) => (
              <a key={e.url} className="boton boton-primario boton-chico" href={e.url} target="_blank" rel="noopener noreferrer">
                <Icono nombre="enlace" tam={16} />
                {e.texto}
              </a>
            ))}
          <button type="button" className="boton boton-borde boton-chico" onClick={() => setVisorAbierto(true)}>
            <Icono nombre="imagen" tam={16} />
            Ver capturas
          </button>
          {p.enlaces
            .filter((e) => e.tipo === 'codigo')
            .map((e) => (
              <a key={e.url} className="boton boton-borde boton-chico" href={e.url} target="_blank" rel="noopener noreferrer">
                <Icono nombre="codigo" tam={16} />
                {e.texto}
              </a>
            ))}
        </div>
      </div>
      {visorAbierto && <Visor imagenes={p.imagenes} titulo={p.titulo} onCerrar={() => setVisorAbierto(false)} />}
    </article>
  )
}

export default ProyectoTarjeta
