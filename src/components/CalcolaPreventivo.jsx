//calcola il preventivo moltiplicando ore e tariffa oraria, aggiungendo automaticamente un extra al totale se viene superata una certa soglia lavorativa

import { useState } from "react";
import Button from "./ui/Button";

export default function CalcolaPreventivo() {
  const [selectedHours, setSelectedHours] = useState(0);
  const [activeButton, setActiveButton] = useState(false);
  const [preventivo, setPreventivo] = useState(0);
  const pagaOra = 15;
  const straordinariOra = 20;

  function handleSelect(actual) {
    setSelectedHours(actual);
    setVisible();
  }

  function setVisible() {
    setActiveButton(true);
  }

  function handleCalcolaPreventivo(input) {
    if (input > 4) {
      setPreventivo(pagaOra * 4 + straordinariOra * (input - 4));
    } else {
      setPreventivo(pagaOra * input);
    }
  }

  return (
    <>
      <div className="container m-3 gap-5">
        <div className=" gap-5">
          <p className="fw-bold mt-2">Tariffa oraria :15€/h </p>
          <p
            id="hoursWorkWarning"
            className="  ">
            Attenzione. Tariffa oraria sopra le 4 ore giornaliere è aumentata di
            5€/h euro l'ora.
          </p>
          <div className="d-flex gap-5 ">
            <div className="d-flex flex-column">
              <label htmlFor="">Ora di Lavoro</label>
              <select
                class="form-select "
                onChange={(e) => handleSelect(e.target.value)}>
                <option selected>...</option>
                <option value="1">1</option>

                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <Button
              testo="Calcola Preventivo"
              isActive={activeButton}
              clicked={() => handleCalcolaPreventivo(selectedHours)}
            />
          </div>
        </div>
      </div>
      <div
        className={`card bg-secondary-subtle m-5 d-flex pt-2 px-2 ${preventivo > 0 ? "" : "d-none"}  `}>
        <p className="fw-bold">
          {`Preventivo per ${selectedHours} ore lavorative: `}
        </p>
        <p className=" d-flex justify-content-end ">{`${preventivo}€`}</p>
      </div>
    </>
  );
}
