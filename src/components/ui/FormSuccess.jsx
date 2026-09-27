import { CircleCheckBig } from "lucide-react";
export default function FormSuccess({ visible }) {
  return (
    <>
      <div
        className={` alert alert-success mx-5 px-4 py-2 pb-0 ${visible ? "" : "d-none"}`}>
        <p>
          Success <CircleCheckBig className="ms-3" />
        </p>
        <p>Grazie per averci scelti</p>
        <p>
          La invitiamo a controllare l' e-mail per completare la registrazione
        </p>
      </div>
    </>
  );
}
