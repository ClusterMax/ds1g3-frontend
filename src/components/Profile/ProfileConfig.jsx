import { useEffect, useState, useContext } from "react";
import { UserDataContext } from "./UserDataProvider";

const ProfileConfig = () => {

  // function handleEditarPerfil(e) {
  //   e.preventDefault();
  //   // Aquí puedes realizar las acciones que desees sin recargar la página
  //   console.log('Botón clicado');
  // };

  // Ejemplo de objeto con los intereses de la persona
  const [intereses, setIntereses] = useState([
    {
      tematica: 'Ejercicio',
      marcado: true
    },
    {
      tematica: 'Programación',
      marcado: false
    },
    {
      tematica: 'Videojuegos',
      marcado: false
    },
    {
      tematica: 'Bailar',
      marcado: true
    },
    {
      tematica: 'Caminar',
      marcado: false
    },
    {
      tematica: 'BMX',
      marcado: false
    },
    {
      tematica: 'Skateboarding',
      marcado: false
    },
    {
      tematica: 'Anime',
      marcado: true
    },
    {
      tematica: 'Política',
      marcado: false
    },
    {
      tematica: 'Nadar',
      marcado: false
    },
    {
      tematica: 'Arte',
      marcado: false
    },
    {
      tematica: 'Música',
      marcado: false
    },
    {
      tematica: 'Manualidades',
      marcado: false
    }
  ])

  // Función para modificar los intereses seleccionados al hacer click
  function handleEditarIntereses(index) {
    const nuevosIntereses = intereses.slice();
    nuevosIntereses[index].marcado = !nuevosIntereses[index].marcado;
    setIntereses(nuevosIntereses);
  }

  const { userData, getUserDataFromDB } = useContext(UserDataContext);

  const [genero, setGenero] = useState("o");

  useEffect(() => {
    if (userData) {
      if (userData.genero) {
        setGenero(userData.genero)
      } else {
        setGenero('o')
      }
    }
  }, [userData]);

  return (

    // Contenedor principal
    <div className="flex flex-col lg:flex-row lg:justify-evenly my-10">

      {/* Card configuración del perfil */}
      <div className="px-12 pt-10 pb-4 bg-gray-100 text-gray-500 rounded-3xl shadow-xl mx-auto max-w-[600px] overflow-hidden flex-grow">
        <h3 className="font-bold text-3xl text-gray-900 text-center mb-7">Configuración del perfil</h3>
        <form>
          <div className="w-full px-3 mb-5">
            <label className="text-sm font-semibold px-1">
              Nombre
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder={userData ? userData.nombre : "..."}
              />
            </div>
          </div>
          <div className="w-full px-3 mb-5">
            <label className="text-sm font-semibold px-1">
              Apellido
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder={userData ? userData.apellido : "..."}
              />
            </div>
          </div>
          <div className="w-full px-3 mb-5">
            <label className="text-sm font-semibold px-1">
              Genero
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full pl-3 pr-3 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-lg focus:border-indigo-500 block"
              value={genero}
              onChange={e => setGenero(e.target.value)}
            >
              <option value="m">Hombre</option>
              <option value="f">Mujer</option>
              <option value="o">Otro</option>
            </select>
          </div>
          <div className="w-full text-center mb-3">
            <label className="font-semibold text-sm px-1">Cambia tus intereses</label>
          </div>
          <div className='border-4 border-gray-400 py-5 rounded-md w-full my-5 mx-auto flex justify-center flex-wrap'>
            {intereses.map((elemento, index) => (
              <span
                key={index}
                name={elemento.tematica}
                className={`rounded-full px-2 py-1 my-1 mx-1 cursor-pointer select-none ${elemento.marcado ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleEditarIntereses(index)}>
                {elemento.tematica}
              </span>
            ))}
          </div>
          <button type="submit" className="inline-block w-[50%] max-w-xs mx-auto mt-7 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
            Continuar
          </button>
          <button type="submit" className="inline-block w-[50%] max-w-xs mx-auto mt-7 hover:bg-gray-300 rounded-lg px-3 py-3 font-semibold"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = '/profile'
            }}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div >
  );
};

export default ProfileConfig;
