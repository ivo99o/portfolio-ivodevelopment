function Logo({ grande = false }) {
  return (
    <span className={`logo-texto ${grande ? 'grande' : ''}`}>
      ivo<span className="logo-guion">_</span>development
      <span className="logo-cursor" aria-hidden="true" />
    </span>
  )
}

export default Logo
