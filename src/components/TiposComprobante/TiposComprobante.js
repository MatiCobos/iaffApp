import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../TiposComprobante/TiposComprobante.css';

const TiposComprobante = ({ setComprobantes }) => {
  // useState para almacenar los tipos de comprobante
  const [tiposComprobante, setTiposComprobante] = useState([]);
  // UuseState para almacenar el tipo de comprobante seleccionado
  const [tipoSeleccionado, setTipoSeleccionado] = useState('');

  // Effect para cargar los tipos de comprobante al montar el componente
  useEffect(() => {
    const cargarTiposComprobante = async () => {
      try {
        const response = await fetch('./tiposcomprobante.json');
        const data = await response.json();
        setTiposComprobante(data);
      } catch (error) {
        console.error('Error al cargar tipos de comprobante:', error);
      }
    };

    cargarTiposComprobante();
  }, []);

  // Manejar el cambio en la selección del tipo de comprobante
  const handleTipoSeleccionado = (e) => {
    setTipoSeleccionado(e.target.value);
  };

  // Función para buscar los comprobantes correspondientes al tipo seleccionado
  const buscarComprobantes = async () => {
    try {
      setComprobantes([]);

      const tipoSeleccionado = document.getElementById('tipoComprobante').value; 
      const response = await fetch('./comprobantes.json');
      const data = await response.json();
      const tipoSeleccionadoInt = parseInt(tipoSeleccionado, 10);
      // Filtro los comprobantes por el tipo seleccionado
      const comprobantesFiltrados = data.filter(comprobante => comprobante.tcom_Codigo === tipoSeleccionadoInt);
      // Actualizar el estado de comprobantes en App.js
      setComprobantes(comprobantesFiltrados);
    } catch (error) {
      console.error('Error al cargar comprobantes:', error);
    }
  };

  return (

    <div className="mb-3 tipos-comprobante-container">
      <div className="label-container">
        <label htmlFor="tipoComprobante" className="form-label">Selecciona un tipo de comprobante:</label>
      </div>
      <div className="input-container">
        <select id="tipoComprobante" className="form-select" onChange={handleTipoSeleccionado}>
          {tiposComprobante.map((tipo) => (
            <option key={tipo.tcom_Codigo} value={tipo.tcom_Codigo}>{tipo.tcom_Descripcion}</option>
          ))}
        </select>
        <button onClick={buscarComprobantes} className="btn btn-primary">Buscar</button>
      </div>
    </div>
  );
};

export default TiposComprobante;
