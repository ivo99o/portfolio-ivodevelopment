import { useCallback, useEffect, useState } from 'react'
import Icono from './Icono.jsx'

function Galeria({ imagenes, titulo }) {
  const [activa, setActiva] = useState(0)
  const [ampliada, setAmpliada] = useState(false)
  const total = imagenes.length

  const mover = useCallback(
    (paso) => setActiva((i) => (i + paso + total) % total),
    [total]
  )

  useEffect(() => {
    if (!ampliada) return undefined
    const alTeclear = (e) => {
      if (e.key === 'Escape') setAmpliada(false)
      if (e.key === 'ArrowLeft') mover(-1)
      if (e.key === 'ArrowRight') mover(1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', alTeclear)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', alTeclear)
    }
  }, [ampliada, mover])

  if (total === 0) {
    return (
      <div className="ventana">
        <div className="ventana-barra">
          <span /> <span /> <span />
        </div>
        <div className="ventana-vacia">
          <Icono nombre="imagen" tam={34} />
          <p>Capturas próximamente</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="ventana">
        <div className="ventana-barra">
          <span /> <span /> <span />
        </div>
        <button type="button" className="ventana-imagen" onClick={() => setAmpliada(true)} aria-label="Ampliar captura">
          <img src={imagenes[activa].src} alt={imagenes[activa].alt || `${titulo}, captura ${activa + 1}`} loading="lazy" />
        </button>
        {total > 1 && (
          <div className="ventana-miniaturas">
            {imagenes.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={i === activa ? 'activa' : ''}
                onClick={() => setActiva(i)}
                aria-label={`Ver captura ${i + 1}`}
              >
                <img src={img.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
      {ampliada && (
        <div className="visor" role="dialog" aria-modal="true" onClick={() => setAmpliada(false)}>
          <button type="button" className="visor-cerrar" aria-label="Cerrar" onClick={() => setAmpliada(false)}>
            <Icono nombre="cerrar" />
          </button>
          {total > 1 && (
            <button
              type="button"
              className="visor-flecha izquierda"
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation()
                mover(-1)
              }}
            >
              <Icono nombre="izquierda" />
            </button>
          )}
          <img src={imagenes[activa].src} alt={imagenes[activa].alt || titulo} onClick={(e) => e.stopPropagation()} />
          {total > 1 && (
            <button
              type="button"
              className="visor-flecha derecha"
              aria-label="Siguiente"
              onClick={(e) => {
                e.stopPropagation()
                mover(1)
              }}
            >
              <Icono nombre="derecha" />
            </button>
          )}
          <p className="visor-contador">
            {activa + 1} / {total}
          </p>
        </div>
      )}
    </>
  )
}

export default Galeria
