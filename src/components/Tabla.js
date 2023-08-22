import React, { useState } from 'react';

const datosDeEjemplo = [
  { id: 1, nombre: 'Uriel', descripcion: 'Descripción del ejemplo 1' },
  { id: 2, nombre: 'Ivan', descripcion: 'Descripción del ejemplo 2' },
  { id: 3, nombre: 'Sergi', descripcion: 'Descripción del ejemplo 3' },
  { id: 4, nombre: 'Aina', descripcion: 'Descripción del ejemplo 4' },
  // Agrega más datos de ejemplo aquí
];

export default function Tabla() {
  const [filtro, setFiltro] = useState('');
  
  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const datosFiltrados = datosDeEjemplo.filter((dato) => {
    return dato.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
           dato.descripcion.toLowerCase().includes(filtro.toLowerCase());
  });

  return (
    <div>
        <h1>Tabla con buscador</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={filtro}
        onChange={handleFiltroChange}
      />
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {datosFiltrados.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
