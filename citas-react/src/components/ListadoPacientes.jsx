// Pacientes
import Pacientes from "./Pacientes"

const ListadoPacientes = ( { pacientes, setPaciente } ) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">

      { pacientes && pacientes.length ? (
        <>

          <h2 className="font-bold text-3xl text-center">Listado Pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {''}
            
            <span className="text-teal-600 font-bold">Pacientes y Citas</span>
          
          </p>

          { pacientes.map( pacientes =>(
              <Pacientes 
                // Siempre que se le pase un listado utilizando .map, tienes que tener un key único.
                key={ pacientes.id }
                // Muestra los pacientes almacenados en el sistema.
                pacientes={ pacientes }
                setPaciente= { setPaciente }
              />
            ) ) }

          </>

      ) : (

        <>

          <h2 className="font-bold text-3xl text-center">No hay pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes {''}
            
            <span className="text-teal-600 font-bold"> y aparecerán en este lugar. </span>

          </p>
        
        </>

      ) }


    </div>
  )
}

export default ListadoPacientes

