import { CircleCheckBig } from "lucide-react";
export default function AlertSuccess({ visible }) {
  return (
    <>
      <div
        className={`mt-3 alert  ${visible ? "d-block alert-success" : "d-none"}`}>
        <p>
          Promotion code Verified <CircleCheckBig />
        </p>
        <p></p>
      </div>
    </>
  );
}
