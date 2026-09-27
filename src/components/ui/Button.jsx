export default function Button(/**active, submit */ { isActive, clicked }) {
  return (
    <>
      {/**if è completo diventa primary */}
      <div
        className={`btn  h-50 align-self-center ${isActive ? "btn-primary" : "btn-secondary"}`}
        onClick={clicked}
        disabled={isActive}>
        <span className="px-3">Invia</span>
      </div>
    </>
  );
}
