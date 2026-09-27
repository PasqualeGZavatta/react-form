// valida un codice promozionale inserito dall'utente mostrando lo sconto applicato o segnalando l'invalidità del codice

import { useState } from "react";
import { promoCodes } from "../constants/vars";
import Button from "./ui/Button";
import AlertDanger from "./ui/AlertDanger";
import AlertSuccess from "./ui/AlertSuccess";

export default function CodicePromozionale() {
  const [code, setCode] = useState("");
  const [redAlert, setRedAlert] = useState(false);
  const [greenAlert, setGreenAlert] = useState(false);
  //   const [] = useState("");

  const activeButton = code !== "".trim();

  //funzioni

  function humbleCheckCodes() {
    if (code === "") {
      return;
    }
    const promozione = promoCodes.filter((promo) => code.includes(promo.code));
    console.log(promozione, promozione.code);

    if (promozione[0] === undefined) {
      setRedAlert(true);
    } else {
      console.log("codice");

      setGreenAlert(true);
      setRedAlert(false);
    }
    setCode("");
    return promozione;
  }

  return (
    <>
      <div className="container p-3">
        <label className="fw-medium fs-4">Codice Promozionale</label>
        <input
          value={code}
          className=" form form-control w-50"
          onChange={(e) => setCode(e.target.value.trim().toUpperCase())}
        />
      </div>
      <div className="container p-3">
        <Button
          testo="Attiva"
          isActive={activeButton}
          clicked={humbleCheckCodes}
        />
        <AlertDanger visible={redAlert} />
        <AlertSuccess visible={greenAlert} />
      </div>
    </>
  );
}
