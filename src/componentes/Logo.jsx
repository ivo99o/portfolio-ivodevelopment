function Logo({ grande = false }) {
  return (
    <span className={`logo-texto ${grande ? 'grande' : ''}`}>
      ivo<span className="logo-guion">_</span>devlpmt
    </span>
  )
}

export default Logo
