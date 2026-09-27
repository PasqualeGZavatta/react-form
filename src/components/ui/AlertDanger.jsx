import { TriangleAlert } from "lucide-react";

export default function AlertDanger({ visible }) {
  return (
    <>
      <div
        className={`mt-3 alert  ${visible ? "d-block alert-danger" : "d-none"}`}>
        <p>
          Ops something went wrong <TriangleAlert />
        </p>
        <p>Try to insert a valid code or a non expired one!</p>
      </div>
    </>
  );
}
