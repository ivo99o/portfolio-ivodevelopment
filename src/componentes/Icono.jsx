const TRAZOS = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 14l-2 2 2 2M15 14l2 2-2 2" />
    </>
  ),
  sistema: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
      <path d="M13 17v-3M16 17v-5M19 17v-7" />
    </>
  ),
  mensaje: (
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </>
  ),
  nube: (
    <>
      <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.5 4.5 0 0 1 0 9z" />
      <path d="M12 12v6M9.5 14.5L12 12l2.5 2.5" />
    </>
  ),
  codigo: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  enlace: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  whatsapp: (
    <>
      <path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .7c-.8-.4-1.5-1.1-1.9-1.9l.7-1-1-2z" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.2-4-2-6-2.5m12 4.5v-3.1a2.7 2.7 0 0 0-.8-2.1c2.8-.3 5.8-1.4 5.8-6.1a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.3s-1.1-.3-3.500 1.300a12 12 0 0 0-6.200 0C6.500 2.800 5.400 3.100 5.400 3.100a4.500 4.500 0 0 0-.1 3.300A4.800 4.800 0 0 0 4 9.700c0 4.700 3 5.800 5.800 6.100a2.700 2.700 0 0 0-.8 2.100V21" />
  ),
  ubicacion: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.800-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.500" />
    </>
  ),
  flecha: <path d="M5 12h14M13 6l6 6-6 6" />,
  izquierda: <path d="M15 5l-7 7 7 7" />,
  derecha: <path d="M9 5l7 7-7 7" />,
  cerrar: <path d="M6 6l12 12M18 6L6 18" />,
  imagen: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.800" />
      <path d="M3 17l5-4 4 3 3-2 6 4" />
    </>
  ),
  tilde: <path d="M5 12.500l4.500 4.500L19 7.500" />,
}

function Icono({ nombre, tam = 22, trazo = 1.8 }) {
  return (
    <svg
      width={tam}
      height={tam}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={trazo}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {TRAZOS[nombre]}
    </svg>
  )
}

export default Icono
