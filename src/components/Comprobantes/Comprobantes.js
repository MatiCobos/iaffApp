import React from 'react';
import '../Comprobantes/Comprobantes.css';

const Comprobantes = ({ comprobantesFiltrados }) => {
  return (
    <div id="resultados" className="mt-3">
      <table className="table table-with-shadow">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Máscara</th>
            <th>Código</th>
            <th>Importe Total</th>
          </tr>
        </thead>
        <tbody>
          {comprobantesFiltrados.map(comprobante => (
            <tr key={comprobante.comp_Codigo}>
              <td>{comprobante.tcom_Descripcion}</td>
              <td>{comprobante.comp_Mascara}</td>
              <td>{comprobante.comp_Codigo}</td>
              <td>{comprobante.comp_ImporteTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comprobantes;
