import React from 'react';

const Contenedor = (props) => {
  return (
    <div style={{ border: '2px solid black', margin: '10px', padding: '20px'}}>
      {props.children}
    </div>
  );
};

const Ejercicio3 = () => {
  return (
    <div>
      <Contenedor>
        <p>Contenedor 1</p>
      </Contenedor>

      <Contenedor>
        <p>Contenedor 2</p>
      </Contenedor>
    </div>
  );
};

export default Ejercicio3;
