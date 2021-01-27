import './Modal.scss';

function Modal({
  titre, children, close, modalClass, visible, toggleVisibility,
}) {
  console.log('valeur de close', close);
  console.log('valeur de modalClass', modalClass);
  console.log('valeur de visible', visible);
  return (
    <div className={`modal-overlay ${visible ? 'block' : 'hidden'}`}>
      <div className={`modal w-1/3 p-8 bg-gray-300 ${modalClass}`}>
        <div className="flex justify-between">
          <h2 className="text-xl underline">{titre}</h2>
          {close ? <div onClick={() => toggleVisibility(false)}>X</div> : null}
        </div>
        {children}
      </div>
    </div>
  );
}
export default Modal;
