//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ nombreCompleto, sagaFavorita }) {
  return (
    <div className="card">
      <h3>Hola {nombreCompleto}! </h3>
      <p>Sabemos que tu saga favorita es {sagaFavorita}</p>
      <button className="btn-card">Aceptar</button>
    </div>
  );
}

export default Card;
