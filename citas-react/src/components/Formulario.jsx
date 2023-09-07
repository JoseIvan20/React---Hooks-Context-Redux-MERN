// Importación de los Hooks
import { useState, useEffect } from "react";
// SweetAlert2
import Swal from "sweetalert2";

const Formulario = ({ pacientes, setPacientes }) => {

    // Uso de useState();
    // Nombre Mascota
    const [ nombre, setNombre ] = useState('');
    // Propietario
    const [ propietario, setPropietario ] = useState('');
    // Email
    const [ email, setEmail ] = useState('');
    // Fecha
    const [ fecha, setFecha ] = useState('');
    // Síntomas
    const [ sintomas, setSintomas ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación de Formulario
        if ( nombre == '' || propietario == '' || email == '' || fecha == '' || sintomas == '' ){
            
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios.',
                timer: 3200,
                timerProgressBar: true,
                showConfirmButton: false,
                showCancelButton: false,
            })

        }else {

            // Objeto de Paciente
            const objectoPaciente = {
                nombre, 
                propietario,
                email,
                fecha,
                sintomas
            }
            
            // Agregamos un areglo sin dañar el original
            setPacientes( [ ...pacientes, objectoPaciente ] );

            // Reiniciar el Formulario - Básicamente, después de agregar un registro, este se limpia para crear uno nuevo.
            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintomas('');
        }

    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-teal-600 font-bold">Administralos</span>
        </p>

        <form action="" className="bg-white shadow-lg rounded-md py-10 px-5 mb-10" onSubmit={handleSubmit}>

            {/* Nombre Mascota: */}
            <div className="mb-5">

                <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota:</label>
                <input id="mascota" type="text" placeholder="Nombre mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md outline-none duration-300 focus:border-teal-600" value={ nombre } onChange={ (e) => setNombre(e.target.value) } />
            
            </div>

            {/* Nombre Propietario: */}
            <div className="mb-5">

                <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Nombre Propietario:</label>
                <input id="propietario" type="text" placeholder="Nombre propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md outline-none duration-300 focus:border-teal-600" value={ propietario } onChange={ (e) => setPropietario(e.target.value ) }/>

            </div>

            {/* Email: */}
            <div className="mb-5">

                <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Email:</label>
                <input id="email" type="email" placeholder="correo@example.com" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md outline-none duration-300 focus:border-teal-600" value={ email } onChange={ (e) => setEmail(e.target.value) }/>

            </div>

            {/* Fecha de Alta: */}
            <div className="mb-5">

                <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">Alta:</label>
                <input id="alta" type="date" placeholder="correo@example.com" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md outline-none duration-300 focus:border-teal-            600" value={ fecha } onChange={ (e) => setFecha(e.target.value) } />

            </div>

            {/* Sintomas: */}
            <div className="mb-5">

                <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Síntomas:</label>
                <textarea name="" id="sintomas" cols="30" rows="3" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md outline-none duration-300 focus:border-teal-600" placeholder="Describe los síntomas..." value={ sintomas } onChange={ (e) => setSintomas(e.target.value ) } ></textarea>

            </div>

            {/* Botón */}
            <div className="flex justify-center">
                <input type="submit" className="bg-teal-600 px-6 py-2 text-white font-bold rounded-md cursor-pointer duration-300 hover:bg-teal-700 hover:transform" value="Agregar Paciente"/>
            </div>

        </form>

    </div>
  )
}

export default Formulario
