import React from 'react';

const Saludo = (props) => {
  const obtenerSaludo = (idioma) => {
    switch (idioma) {
      case 'es':
        return `Hola ${props.nombre}`;
      case 'en':
        return `Hello ${props.nombre}`;
      default:
        return `Hola ${props.nombre}`;
    }
  };

  return (
    <div>
      <h1>{obtenerSaludo(props.idioma)}</h1>
    </div>
  );
};

const Ejercicio2 = () => {
  return (
    <div>
      <Saludo nombre="Juan" idioma="es" />
      <Saludo nombre="Juan" idioma="en" /> 
    </div>
  );
};

export default Ejercicio2;
