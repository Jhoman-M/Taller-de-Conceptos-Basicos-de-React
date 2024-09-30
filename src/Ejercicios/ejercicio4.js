import React, { useState } from 'react';

const Ejercicio4 = () => {
  const [contador, numeroContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => numeroContador(contador + 1)}>Aumentar</button>
      <button onClick={() => numeroContador(contador - 1)}>Disminuir</button>
    </div>
  );
};

export default Ejercicio4;
