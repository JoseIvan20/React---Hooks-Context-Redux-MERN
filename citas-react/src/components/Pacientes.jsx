const Pacientes = ( { pacientes, setPaciente } ) => {

    // Mostrar la información en un listado
    const { nombre, propietario, email, fecha, sintomas } = pacientes;

  return (
    <div className="mx-5 my-10 bg-white shadow-lg rounded-md px-5 py-10">

        <p className="font-bold mb-3 text-gray-600 uppercase">Nombre: {''}

            <span className="font-normal normal-case"> { nombre } </span>

        </p>

        <p className="font-bold mb-3 text-gray-600 uppercase">Propietario: {''}

            <span className="font-normal normal-case"> { propietario } </span>

        </p>

        <p className="font-bold mb-3 text-gray-600 uppercase">Email: {''}

            <span className="font-normal normal-case">{ email }</span>

        </p>

        <p className="font-bold mb-3 text-gray-600 uppercase">Fecha Alta: {''}

            <span className="font-normal normal-case"> { fecha } </span>

        </p>

        <p className="font-bold mb-3 text-gray-600 uppercase">Síntomas: {''}

            <span className="font-normal normal-case"> { sintomas } </span>

        </p>

        {/* Botones de Eliminar y Actualizar */}
        <div className="flex justify-between mt-5">

            <button type="button" className="py-2 px-10 bg-teal-600 duration-200 hover:bg-teal-700 hover:shadow-lg text-white rounded-md font-bold" >Editar</button>

            <button type="button" className="py-2 px-10 bg-red-600 duration-200 hover:bg-red-700 hover:shadow-lg text-white rounded-md font-bold" >Eliminar</button>

        </div>

  </div>
  )
}

export default Pacientes
