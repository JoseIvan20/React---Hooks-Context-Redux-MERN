// Pacientes
import Pacientes from "./Pacientes"

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">

        <h2 className="font-bold text-3xl text-center">Listado Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Administra tus {''}
          
          <span className="text-teal-600 font-bold">Pacientes</span>
        
        </p>

        {/* Pacientes */}
        <Pacientes />
        <Pacientes />
        <Pacientes />

    </div>
  )
}

export default ListadoPacientes

