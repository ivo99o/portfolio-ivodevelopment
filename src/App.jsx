import Navbar from './componentes/Navbar.jsx'
import Hero from './componentes/Hero.jsx'
import Proyectos from './componentes/Proyectos.jsx'
import Servicios from './componentes/Servicios.jsx'
import Stack from './componentes/Stack.jsx'
import Contacto from './componentes/Contacto.jsx'
import Pie from './componentes/Pie.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proyectos />
        <Servicios />
        <Stack />
        <div className="cierre">
          <Contacto />
          <Pie />
        </div>
      </main>
    </>
  )
}

export default App
