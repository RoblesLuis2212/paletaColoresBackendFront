import Footer from "./components/Footer"
import FormularioColores from "./components/FormularioColores"

function App() {

  return (
    <>
      <h1 className="text-center mt-2">Paleta de Colores</h1>
      <main>
        <FormularioColores></FormularioColores>
      </main>
      <Footer />
    </>
  )
}

export default App
