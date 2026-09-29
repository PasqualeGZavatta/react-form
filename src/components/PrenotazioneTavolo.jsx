//registra i dati di prenotazione del tavolo confermando all'utente i dettagli inseriti (nome, n. ospiti e data) in una scheda di riepilogo

import { useState } from "react";

export default function PrenotazioneTavolo() {
  //   const [attivo, setAttivo] = useState(false);
  const [formVisibility, setFormVisibility] = useState(true);
  const [cardVisibility, setCardVisibility] = useState(false);

  const [text, setText] = useState([
    {
      name: "",
      lastname: "",
      ospiti: "",
      data: "",
      ora: "",
    },
  ]);

  const isNotEverythingWritten =
    text[0].name !== "" &&
    text[0].lastname !== "" &&
    text[0].ospiti !== "" &&
    text[0].data !== "" &&
    text[0].ora !== "";

  //funzioni

  function handleSetText(input, campo, index) {
    setText((persona) => [
      {
        ...persona[index],
        [campo]: input,
      },
    ]);
  }

  function handleSumbit(e) {
    e.preventDefault();
    if (!isNotEverythingWritten) {
      return;
    } else {
      handleSetVisibility();
    }
  }

  function handleSetVisibility() {
    setCardVisibility(true);
    setFormVisibility(false);
  }

  return (
    <>
      <div className="m-3">
        <form
          action=""
          className={`m-4 input-group-text d-flex flex-column ${formVisibility ? "" : "d-none"}`}
          onSubmit={handleSumbit}>
          {/**Nome cognome */}
          <div
            className="input-group justify-content-between"
            id="Nome e Cognome">
            <label
              className=" d-flex justify-content-center flex-column me-3 "
              htmlFor="name">
              <p className="m-1 text-center fw-bold">First & </p>
              <p className="m-1 text-center fw-bold">Last name</p>
            </label>

            <div>
              <input
                index="0"
                id="name"
                name="name"
                type="text"
                aria-label="First name"
                className="form-control"
                onChange={(e) =>
                  handleSetText(e.target.value, e.target.name, 0)
                }></input>

              <input
                name="lastname"
                id="lastname"
                type="text"
                aria-label="Last name"
                className="form-control"
                onChange={(e) =>
                  handleSetText(e.target.value, e.target.name, 0)
                }></input>
            </div>
          </div>
          {/**Numero ospiti */}
          <div
            id="n. ospiti "
            className="mt-3 d-flex justify-content-between">
            <label
              htmlFor="time"
              className="fw-bold">
              Numero Ospiti
            </label>
            <input
              name="ospiti"
              id="ospiti"
              type="number"
              className="form-control w-25 ms-3"
              onChange={(e) =>
                handleSetText(e.target.value, e.target.name, 0)
              }></input>
          </div>
          {/**Ora e giorno */}
          <div
            className="input-group justify-content-between mt-2"
            id="Data e ora">
            <label
              className=" d-flex justify-content-center flex-column me-3 "
              htmlFor="">
              <p className="m-1 text-center fw-bold">Data & </p>
              <p className="m-1 text-center fw-bold">Ora</p>
            </label>

            <div>
              <input
                type="date"
                name="data"
                aria-label="Data"
                className="form-control"
                onChange={(e) =>
                  handleSetText(e.target.value, e.target.name, 0)
                }></input>
              <input
                name="ora"
                type="time"
                aria-label="Ora"
                className="form-control"
                onChange={(e) =>
                  handleSetText(e.target.value, e.target.name, 0)
                }></input>
            </div>
          </div>
          <hr />
          {/**Bottone sumbit */}
          <button className="btn btn-primary  ">Prenota</button>
        </form>
        {/**CARD */}
        <div
          className={`card bg-success p-1 mx-5 my-0 ${cardVisibility ? "" : "d-none"}`}>
          <p id="dati">
            <b>Nome:</b> {text[0].name}
          </p>
          <p id="dati">
            <b>Cognome:</b> {text[0].lastname}
          </p>
          <p id="dati">
            <b>N. partecipanti:</b>
            {text[0].ospiti}
          </p>
          <p id="dati">
            <b>Giorno:</b>
            {text[0].data}
          </p>
          <p id="dati">
            <b>Ora:</b>
            {text[0].ora}
          </p>
        </div>
      </div>
    </>
  );
}
