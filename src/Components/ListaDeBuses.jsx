import React, { useState, useEffect } from 'react';

function ListaBuses() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5173/api";

  useEffect(() => {
    fetch(`${API_URL}/bus`)
      .then((response) => response.json())
      .then((data) => {
        setBuses(data);  
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching buses:', error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bus-list'>
      <h1>Lista de Buses</h1>
      <table className="bus-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Número</th>
            <th>Placa</th>
            <th>Características</th>
            <th>Marca</th>
            <th>Activo</th>
            <th>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.id}</td>
              <td>{bus.numero}</td>
              <td>{bus.placa}</td>
              <td>{bus.caracteristicas}</td>
              <td>{bus.marca.nombre}</td>
              <td>{bus.activo ? 'Activo' : 'Inactivo'}</td>
              <td>{bus.fechaCreacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaBuses;