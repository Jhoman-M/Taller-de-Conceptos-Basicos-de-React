¿Cuál es la diferencia entre un componente UI y un componente funcional en React?
Un componente UI se refiere a un componente que está centrado únicamente en la presentación visual de la aplicación
Un componente funcional es una forma específica de crear componentes en React usando una función

¿Qué son las props en React y cuál es su propósito principal?
los props son una forma de pasar datos de un componente a otro y son utiles para reutilizar codigo
Las props son datos que se le envían a un componente desde su componente padre. El componente puede usar estos datos
para mostrar información o cambiar su comportamiento.
El propósito principal de las props es permitir que los componentes reciban información o datos desde sus 
"padres" para que puedan generar contenido o realizar acciones de manera personalizada

¿Qué son los children props en React y por qué no se recomienda su uso excesivo?
los children props son una forma de pasar contenido a un componente desde su componente padre. Se utilizan para permitir
que un componente contenga otros elementos o componentes dentro de su estructura.
el uso excesivo de los children props pueden dificultar la reutilización si un componente depende mucho de su contenedor hijo y
Usar children props puede ocultar la relación directa entre los componentes y sus datos.

¿Qué es useState en React y para qué se utiliza principalmente?
useState es un hook en React que se utiliza para agregar estado a componentes funcionales. Permite a los desarrolladores
crear y manejar variables de estado dentro de un componente.
se suele usar para gestionar el estado el cual permite a los componentes almacenar y actualizar datos que pueden cambiar a lo largo del tiempo
