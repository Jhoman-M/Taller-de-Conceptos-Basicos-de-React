import React from 'react';

const Saludo = (props) => {
  return (
    <div>
      <h1>Hola {props.nombre}</h1>
    </div>
  );
};

const Ejercicio1 = () => {
  return (
    <div>
      <Saludo nombre="Juan" />
    </div>
  );
};

export default Ejercicio1;
