//raccogli il feedback dell'utente tramite un voto numerico (radio button) e un commento testuale fornendo una risposta personalizzata in base al punteggio ottenuto
import { Star } from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";
import AlertSuccess from "../ui/AlertSuccess";
import { valutazioni } from "../../constants/vars";
export default function Feedback() {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [formVisibile, setFormVisible] = useState(true);

  //   const isChecked = ()
  function humbleSelect(value) {
    setSelected(value);
    setActive(true);
  }

  function humbleBtnClick() {
    setAlertVisible(true);
    setFormVisible(false);
  }

  return (
    <>
      <section className={`container m-3 px-5 ${formVisibile ? "" : "d-none"}`}>
        <h2>Valutaci</h2>
        <div className="d-flex justify-content-between me-5">
          <section className="d-flex flex-column gap-2 radio-group">
            <div className="form-check">
              <input
                id="1"
                name="checkRadio"
                type="radio"
                className="form-check-input me-2 border-3 text-black fw-bolder"
                value={1}
                onChange={() => humbleSelect(1)}
              />
              <label
                htmlFor="Check1"
                className="form-check-label ">
                <Star className="h-75 text-warning-emphasis" />
              </label>
            </div>
            <div className="form-check">
              <input
                id="Check2"
                name="checkRadio"
                type="radio"
                className="form-check-input me-2 border-3 text-black fw-bolder"
                value={2}
                onChange={() => humbleSelect(2)}
              />
              <label
                htmlFor="Check2"
                className="form-check-label ">
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
              </label>
            </div>
            <div id="3">
              <input
                name="checkRadio"
                id="Check3"
                type="radio"
                className="form-check-input me-2 border-3 text-black fw-bolder"
                value={3}
                onChange={() => humbleSelect(3)}
              />
              <label
                htmlFor="Check3"
                className="form-check-label ">
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
              </label>
            </div>
            <div id="4">
              <input
                name="checkRadio"
                id="Check4"
                type="radio"
                className="form-check-input me-2 border-3 text-black fw-bolder"
                value={4}
                onChange={() => humbleSelect(4)}
              />
              <label
                htmlFor="Check4"
                className="form-check-label ">
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
              </label>
            </div>
            <div id="5">
              <input
                name="checkRadio"
                id="Check5"
                type="radio"
                className="form-check-input me-2 border-3 text-black fw-bolder"
                value={5}
                onChange={() => humbleSelect(5)}
              />
              <label
                htmlFor="Check5"
                className="form-check-label ">
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
                <Star className="h-75 text-warning-emphasis" />
              </label>
            </div>
          </section>
          <Button
            testo="Invia"
            isActive={active}
            clicked={humbleBtnClick}
          />
        </div>
      </section>
      <div className="container">
        {" "}
        <AlertSuccess
          visible={alertVisible}
          text={valutazioni[selected].messaggio}
        />
      </div>
    </>
  );
}
