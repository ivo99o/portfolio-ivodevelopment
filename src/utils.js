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
  const alFinal = seccion.hasAttribute('data-al-final')
  const maximo = document.documentElement.scrollHeight - window.innerHeight
  let destino = seccion.getBoundingClientRect().top + window.scrollY - ALTO_BARRA
  if (alFinal) destino = maximo
  const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: Math.max(0, destino), behavior: reducir ? 'auto' : 'smooth' })
  window.history.replaceState(null, '', `#${id}`)
}
