
export const Modal = () => {
  const dialog = document.querySelector("dialog");

  return (
    <div>
        <dialog className="text-white">
          <button autoFocus onClick={() => dialog.close()} className="text-black">Close</button>
          <p className="text-black">This modal dialog has a groovy backdrop!</p>
        </dialog>
        <button onClick={() =>  dialog.showModal()}>Show the dialog</button>
    </div>
  )
}
