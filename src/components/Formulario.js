import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const submitCita = e => {
    e.preventDefault();
    if (
      mascota.trim() &&
      propietario.trim() &&
      fecha.trim() &&
      hora.trim() &&
      sintomas.trim()
    ) {
      console.log('ok');
      cita.id = uuid();
      console.log(cita);
      crearCita(cita);
      actualizarCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
      });

      actualizarError(false);
    } else {
      console.log('fallure');
      actualizarError(true);
    }
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <Fragment>
      <h2>Crear CIta</h2>

      {error ? <p className="alerta-error">Error en los campos</p> : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="nombre del dueño"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Descripción</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          placeholder="descripción sintomas"
          onChange={actualizarState}
          value={sintomas}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
};

export default Formulario;
