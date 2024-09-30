import React, { useState } from 'react';
import Ejercicio1 from './Ejercicios/ejercicio1';
import Ejercicio2 from './Ejercicios/ejercicio2';
import Ejercicio3 from './Ejercicios/ejercicio3';
import Ejercicio4 from './Ejercicios/ejercicio4';



const App = () => {
  const [ejercicioSeleccionado, mostrarEjercicioSeleccionado] = useState('Ejercicio1');

  const mostrarEjercicio = () => {
    switch (ejercicioSeleccionado) {
      case 'Ejercicio1':
        return <Ejercicio1 />;
      case 'Ejercicio2':
        return <Ejercicio2 />;
      case 'Ejercicio3':
        return <Ejercicio3 />;
    case 'Ejercicio4':
        return <Ejercicio4 />;
      default:
        return <Ejercicio1 />;
    }
  };

  return (
    <div>
      <h1>Ejercicios</h1>
      <nav>
        <button onClick={() => mostrarEjercicioSeleccionado('Ejercicio1')}>Ejercicio 1</button>
        <button onClick={() => mostrarEjercicioSeleccionado('Ejercicio2')}>Ejercicio 2</button>
        <button onClick={() => mostrarEjercicioSeleccionado('Ejercicio3')}>Ejercicio 3</button>
        <button onClick={() => mostrarEjercicioSeleccionado('Ejercicio4')}>Ejercicio 3</button>

      </nav>
      <div>
        {mostrarEjercicio()}{}
      </div>
    </div>
  );
};

export default App;
