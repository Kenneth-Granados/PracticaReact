import PropTypes from "prop-types";

const newMessage = {
  message: "Hola",
  title: "Kenneth",
};

const getMessage = () => {
  const get = newMessage.message + " " + newMessage.title;
  return get;
};

// export const FirstApp = () => { ejemplo 1
//   return (
//     //  esto es un fragmento: un agrupador de elemento
//     <>
//       {/* <code>Hola.. { JSON.stringify(newMessage) } </code> */}
//       <h1> {getMessage()} </h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veniam
//         enim. A vel voluptas tempore molestias quo nulla necessitatibus nihil
//         sapiente nesciunt. Omnis exercitationem, tenetur quis assumenda tempora
//         officia officiis.
//       </p>
//     </>
//   );
// };
export const FirstApp = ({ title, subtitle, num }) => {
  //para que siempre resiva parametro y no tener que definir aquí por default
  //ejempplo 2

  return (
    <>
      <h1> {title} </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>{subtitle}</p>
      <h2>{num}</h2>
    </>
  );
};
// uso de PropTypes se usa para que los datos sean enviado de forma requerida al invocar el componente
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

//uso de defaultProp
FirstApp.defaultProps = {
  name: "Kenneth",
  subtitle: "No hay subtitulo",
  title: "No hay titulo",
};
