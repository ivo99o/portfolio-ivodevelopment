import Logo from './Logo.jsx'

function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor pie-fila">
        <Logo />
        <p>Página creada por Iván Mena · {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Pie
