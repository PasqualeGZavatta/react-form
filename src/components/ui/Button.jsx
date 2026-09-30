export default function Button(
  /**active, submit */ { isActive, clicked, testo = "" },
) {
  return (
    <>
      {/**if è completo diventa primary */}
      <button
        className={`btn  h-50 align-self-center ${isActive ? "btn-primary" : "btn-secondary"}`}
        onClick={clicked}
        disabled={isActive}>
        <span className="px-3">{testo}</span>
      </button>
    </>
  );
}
