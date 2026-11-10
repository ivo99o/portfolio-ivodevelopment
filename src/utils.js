const ALTO_BARRA = 68

export function irASeccion(id, evento) {
  const seccion = document.getElementById(id)
  if (!seccion) return
  if (evento) evento.preventDefault()
  const contenido = seccion.querySelector('.contenedor') || seccion
  const caja = contenido.getBoundingClientRect()
  const disponible = window.innerHeight - ALTO_BARRA
  const inicio = caja.top + window.scrollY - ALTO_BARRA
  const destino = caja.height >= disponible ? inicio - 16 : inicio - (disponible - caja.height) / 2
  const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: Math.max(0, destino), behavior: reducir ? 'auto' : 'smooth' })
  window.history.replaceState(null, '', `#${id}`)
}
