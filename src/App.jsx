
import Formulario from "./Components/Formulario"
import { useState} from "react"

function App() {

  const [ Destino, setDestino] = useState([])
  return (
    <div>
     <Formulario
          Destino={Destino}
         setDestino={setDestino}
     ></Formulario>
    </div>
  )
}

export default App
