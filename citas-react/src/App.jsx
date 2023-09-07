// Componentes - ./components/... //
// Importamos useState (73-. Pasando Información entre componentes Props)
import { useState } from "react";
// Header
import Header from "./components/Header";
// Formulario
import Formulario from "./components/Formulario";
// ListadoPaciente
import ListadoPacientes from "./components/ListadoPacientes";

function App () {

  const [ pacientes, setPacientes ] = useState([]);

  return (

    <div className="container mx-auto mt-20">
    
      {/* Header */}
      <Header />

      <div className="mt-12 md:flex">

        {/* Formulario */}
        <Formulario 

          pacientes={ pacientes }
          setPacientes={ setPacientes }
        
        />

        {/* ListadoPacientes */}
        <ListadoPacientes />

      </div>

    </div>
  )

}

export default App