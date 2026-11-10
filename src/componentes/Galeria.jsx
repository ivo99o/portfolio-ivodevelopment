import { useCallback, useEffect, useState } from 'react'
import Icono from './Icono.jsx'

export function VistaPrevia({ imagenes, titulo, onAbrir }) {
  const primera = imagenes[0]
  return (
    <div className="ventana">
      <div className="ventana-barra">
        <span /> <span /> <span />
      </div>
      {primera ? (
        <button type="button" className="ventana-imagen" onClick={onAbrir} aria-label={`Ver capturas de ${titulo}`}>
          <img src={primera.src} alt={primera.alt || `${titulo}, captura`} loading="lazy" />
        </button>
      ) : (
        <div className="ventana-vacia">
          <Icono nombre="imagen" tam={34} />
          <p>Capturas próximamente</p>
        </div>
      )}
    </div>
  )
}

export function Visor({ imagenes, titulo, onCerrar }) {
  const [activa, setActiva] = useState(0)
  const total = imagenes.length

  const mover = useCallback((paso) => setActiva((i) => (i + paso + total) % total), [total])

  useEffect(() => {
    const alTeclear = (e) => {
      if (e.key === 'Escape') onCerrar()
      if (total > 1 && e.key === 'ArrowLeft') mover(-1)
      if (total > 1 && e.key === 'ArrowRight') mover(1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', alTeclear)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', alTeclear)
    }
  }, [mover, onCerrar, total])

  const detener = (e) => e.stopPropagation()

  return (
    <div className="visor" role="dialog" aria-modal="true" aria-label={`Capturas de ${titulo}`} onClick={onCerrar}>
      <button type="button" className="visor-cerrar" aria-label="Cerrar" onClick={onCerrar}>
        <Icono nombre="cerrar" />
      </button>
      {total === 0 ? (
        <div className="visor-vacio" onClick={detener}>
          <Icono nombre="imagen" tam={40} />
          <h3>Capturas próximamente</h3>
          <p>Estoy preparando las capturas de {titulo}.</p>
        </div>
      ) : (
        <>
          {total > 1 && (
            <button
              type="button"
              className="visor-flecha izquierda"
              aria-label="Anterior"
              onClick={(e) => {
                detener(e)
                mover(-1)
              }}
            >
              <Icono nombre="izquierda" />
            </button>
          )}
          <img src={imagenes[activa].src} alt={imagenes[activa].alt || titulo} onClick={detener} />
          {imagenes[activa].pie && <p className="visor-pie">{imagenes[activa].pie}</p>}
          {total > 1 && (
            <button
              type="button"
              className="visor-flecha derecha"
              aria-label="Siguiente"
              onClick={(e) => {
                detener(e)
                mover(1)
              }}
            >
              <Icono nombre="derecha" />
            </button>
          )}
          <p className="visor-contador">
            {activa + 1} / {total}
          </p>
        </>
      )}
    </div>
  )
}
