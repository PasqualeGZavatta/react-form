import { useState } from "react";
import Button from "./ui/Button";
import FormSuccess from "./ui/FormSuccess";

{
  /**gestisci l'iscrizione alla newsletter nascondendo il form e mostrando un messaggio di ringraziamento dopo l'invio */
}

export default function FormNewsLetter() {
  const [textName, setTextName] = useState("");
  const [textSurname, setTextSurname] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [active, setActive] = useState(false);

  const activeButton =
    textName !== "" && textSurname !== "" && textEmail !== "";

  //funcions
  function handleSumbit(e) {
    e.preventDefault();
    if (textName !== "" && textSurname !== "" && textEmail !== "") {
      console.log("submit  fatto");
      setActive(true);
    } else {
      console.log("Submit NON fatto");
    }
  }

  // function handleIsActive(boolean) {
  //   setActive(true);
  // }

  return (
    <section>
      <FormSuccess visible={active} />
      <form
        className={`container ${active ? "d-none" : ""}`}
        action="">
        <div className="d-flex gap-3 mb-3">
          <div>
            <h2>Nome</h2>
            <input
              value={textName}
              name="nome"
              type="text"
              placeholder="es: Mario "
              onChange={(e) => setTextName(e.target.value.trim())}
            />
          </div>

          <div>
            <h2>Cognome</h2>
            <input
              name="cognome"
              type="text"
              placeholder="es: Rossi "
              onChange={(e) => setTextSurname(e.target.value.trim())}
            />
          </div>
        </div>

        <div className="d-flex me-5 justify-content-between">
          <div className="vw-100">
            <h2 className="">Email</h2>
            <input
              name="email"
              className="w-75"
              type="email"
              placeholder="es: marioRossi@gmail.com "
              onChange={(e) => setTextEmail(e.target.value.trim())}
            />
          </div>
          <Button
            testo="Invia"
            clicked={handleSumbit}
            isActive={activeButton}
          />
        </div>
      </form>
      <div
        className={`card mx-5 w-25 align-self-center fw-bold text-left d-flex justify-content-center ps-3 bg-secondary-subtle ${active ? "" : "d-none"}`}>
        <p className="">{textName}</p>
        <p>{textSurname}</p>
        <p>{textEmail}</p>
      </div>
    </section>
  );
}
2222;
