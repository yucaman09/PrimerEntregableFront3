import React from "react";
import { useState } from "react";
import Card from "./Card";

export const Form = () => {
  const [encuestado, setEncuestado] = useState({
    nombreCompleto: "",
    sagaFavorita: "",
  });

  const [showCard, setShowCard] = useState(false);

  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      (encuestado.nombreCompleto.trim().length <= 2 )||
      encuestado.sagaFavorita.length <= 5
    ) {
      setErr(true);
      setShowCard(false);
    } else {
      setErr(false);
      setShowCard(true);
    }
  };

  return (
    <>
      <div className="container">
        <form className="form">
          <br />
          <input
            type="text"
            onChange={(e) =>
              setEncuestado({ ...encuestado, nombreCompleto: e.target.value })
            }
            placeholder={"Nombre Completo"}
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) =>
              setEncuestado({ ...encuestado, sagaFavorita: e.target.value })
            }
            placeholder={"Saga Favorita"}
          />

          <br />
          <br />
          <br />
          <button type="submit" className="btn" onClick={handleSubmit}>
            Enviar
          </button>

          <br />
          <br />
        </form>
      </div>

      <br />
      <br />
      {showCard ? (
        <Card
          nombreCompleto={encuestado.nombreCompleto}
          sagaFavorita={encuestado.sagaFavorita}
        ></Card>
      ) : null}

      {err ? (
        <span className="err">
          Por favor chequea que la información sea correcta.
        </span>
      ) : null}
    </>
  );
};
