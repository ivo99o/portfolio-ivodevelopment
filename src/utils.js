const ALTO_BARRA_BASE = 68

export function medirBarra() {
  const barra = document.querySelector('.navbar')
  const alto = barra ? Math.round(barra.getBoundingClientRect().height) : ALTO_BARRA_BASE
  document.documentElement.style.setProperty('--alto-barra', `${alto}px`)
  return alto
}

export function irASeccion(id, evento) {
  const seccion = document.getElementById(id)
  if (!seccion) return
  if (evento) evento.preventDefault()
  const ALTO_BARRA = medirBarra()
  const contenido = seccion.querySelector('.contenedor') || seccion
  const caja = contenido.getBoundingClientRect()
  const disponible = window.innerHeight - ALTO_BARRA
  const inicio = caja.top + window.scrollY - ALTO_BARRA
  const alFinal = seccion.hasAttribute('data-al-final')
  const maximo = document.documentElement.scrollHeight - window.innerHeight
  let destino = caja.height >= disponible ? inicio - 16 : inicio - (disponible - caja.height) / 2
  if (alFinal) destino = maximo
  const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: Math.max(0, destino), behavior: reducir ? 'auto' : 'smooth' })
  window.history.replaceState(null, '', `#${id}`)
}
