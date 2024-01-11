// Usamos la directiva 'use client' para Next.js, que indica que este componente solo debe ejecutarse en el cliente y no durante el renderizado del lado del servidor.
'use client';

// Importamos useState de React para manejar el estado.
import { useState } from 'react';
// Importamos el icono UserIcon de Heroicons.
import { UserIcon } from '@heroicons/react/outline';

// Definimos el componente UserMenu.
const UserMenu = () => {
  // useState para manejar la visibilidad del menú desplegable.
  const [showDropdown, setShowDropdown] = useState(false);

  // Renderizamos el componente.
  return (
    // Contenedor principal del menú.
    <div className="relative">
      {/* Icono de usuario que controla la visibilidad del menú desplegable */}
      <div 
        // Mostramos el menú cuando el mouse entra en el área del icono.
        onMouseEnter={() => setShowDropdown(true)}
        // Ocultamos el menú cuando el mouse sale del área del icono.
        onMouseLeave={() => setShowDropdown(false)}
      >
        {/* Icono de usuario con estilos aplicados */}
        <UserIcon className="w-6 h-6 text-gray-600 hover:text-orange-500" />
      </div>
      
      {/* Renderizamos el menú desplegable si showDropdown es verdadero */}
      {showDropdown && (
        <div 
          // Estilos del menú desplegable.
          className="absolute right-0 py-2 w-48 bg-white rounded-md shadow-xl z-20"
          // Mantenemos el menú visible mientras el mouse esté sobre él.
          onMouseEnter={() => setShowDropdown(true)}
          // Ocultamos el menú cuando el mouse sale de su área.
          onMouseLeave={() => setShowDropdown(false)}
        >
          {/* Opciones del menú */}
          <p href="/ingresar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white">Ingresar</p>
          <p href="/registrar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white">Registrar usuario</p>
        </div>
      )}
    </div>
  );
};


export default UserMenu;

