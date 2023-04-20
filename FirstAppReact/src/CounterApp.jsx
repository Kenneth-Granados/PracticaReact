import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  // const headleAdd = (event) => {
  //     console.log(event);
  //   };
  // desestructurando, el segundo parametro es para cambiar el valor del primero
  const [counter, setCounter] = useState(value);
  const headleAdd = () => {
    // setCounter(counter + 1); // cambia el estado y vuelve a ejecutar el componente
    setCounter((c) => c + 1); // realiza la misma accion
  };
  return (
    <>
      <h1>CounterApp Practica</h1>
      {/* <h2>Valor desde la invocacion del componente: {value}</h2> */}
      {/* <h2>Valor desde el evento click:</h2> */}
      <h2>{counter}</h2>
      <button onClick={headleAdd}>+1</button>
    </>
  );
};
//recordatorio:  cuando a un argumento solo se utiliza para pasarlos a una funcion se puede solo escribir el nombre de la funcion
// ejemplo (example) => EjemploFuction(example) = EjemploFuction
CounterApp.propType = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  message: "Saludando desde el props",
};
