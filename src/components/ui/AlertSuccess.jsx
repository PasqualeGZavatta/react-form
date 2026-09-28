export default function AlertSuccess({ visible, text, icon = "" }) {
  return (
    <>
      <div
        className={`mt-3 alert  ${visible ? "d-block alert-success" : "d-none"}`}>
        <p>
          {text}
          {icon}
        </p>
        <p></p>
      </div>
    </>
  );
}
