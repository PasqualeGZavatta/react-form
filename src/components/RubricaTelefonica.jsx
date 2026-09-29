import { useState } from "react";
import { Trash } from "lucide-react";

export default function RubricaTelefonica() {
  const [text, setText] = useState({
    nome: "",
    cognome: "",
    numero: "",
  });

  const [rubrica, setRubrica] = useState([]);

  //funzioni
  function handleSetText(input, campo) {
    setText((persona) => ({
      ...persona,
      [campo]: input,
    }));
  }

  function humbleSubmit(e) {
    e.preventDefault();
    humbleAddContact();
  }

  function humbleAddContact() {
    setRubrica((prevRubrica) => [...prevRubrica, text]);
  }

  function humbleRemoveContact(indexDaEliminare) {
    setRubrica((prevRubrica) =>
      prevRubrica.filter((item, index) => index !== indexDaEliminare),
    );
  }
  return (
    <>
      <div className="container m-3">
        <form
          action=""
          onSubmit={humbleSubmit}>
          {" "}
          <h3 htmlFor="">Aggiungi Contatto</h3>
          <div className="card p-2 bg-info">
            <div className="contactInfo">
              <label
                htmlFor="nome"
                className="fw-bold">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                onChange={(e) => handleSetText(e.target.value, e.target.name)}
              />
            </div>
            <div className="contactInfo">
              <label
                htmlFor="cognome"
                className="fw-bold">
                Cognome
              </label>
              <input
                type="text"
                name="cognome"
                id="cognome"
                onChange={(e) => handleSetText(e.target.value, e.target.name)}
              />
            </div>
            <div className="contactInfo">
              <label
                htmlFor="numero"
                className="fw-bold">
                Numero
              </label>
              <input
                type="number"
                name="numero"
                id="numero"
                onChange={(e) => handleSetText(e.target.value, e.target.name)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-secondary w-50 m-1 p-2">
                Aggiungi{" "}
              </button>
            </div>
          </div>
        </form>

        {/**rubrica */}

        <div className="container w-100  py-3  m-2 d-flex flex-column">
          <div id="rubrica">
            <h3>Rubrica Telefonica</h3>
            <div className="d-flex justify-content-between">
              <div id="nome">
                <h4>Nome</h4>
                {rubrica.map((item, index) => (
                  <li
                    key={index}
                    className="px-1">
                    {item.nome}
                  </li>
                ))}
              </div>
              <div id="cognome">
                <h4>Cognome</h4>
                {rubrica.map((item, index) => (
                  <li
                    key={index}
                    className="px-1">
                    {item.cognome}
                  </li>
                ))}
              </div>
              <div>
                <h4>Numero</h4>
                {rubrica.map((item, index) => (
                  <li
                    key={index}
                    className="d-flex justify-content-between">
                    {item.numero}{" "}
                    <button className="btn ">
                      <Trash
                        className="h-75"
                        onClick={() => humbleRemoveContact(index)}
                      />
                    </button>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
