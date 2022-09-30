import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./modal.styles.css";

interface IProps {
  onClose: () => void;
  showModal: boolean;
  headerText?: string;
  modalBody?: JSX.Element | string;
  modalFooter?: JSX.Element | string;
  hideModalCross?: boolean;
}

function Modal(props: IProps) {
  const {
    onClose,
    showModal,
    headerText = "",
    modalFooter,
    modalBody,
    hideModalCross = false,
  } = props;

  const escHandler = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === "Escape") {
      onClose();
    }
  };
  const clickHandler = (event: MouseEvent) => {
    const { className } = event.target as HTMLDivElement;
    if (className === "modal-container") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", escHandler, false);
    window.addEventListener("click", clickHandler, false);

    return () => {
      window.removeEventListener("keyup", escHandler, false);
      window.removeEventListener("click", clickHandler, false);
    };
  }, []);

  const rootModalElem = document.getElementById("modal") as HTMLElement;
  const modalElem = showModal && (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header flex justify-between">
          <div className="header-text">{headerText}</div>
          {!hideModalCross && (
            <div className="font-bold cursor-pointer" onClick={onClose}>
              X
            </div>
          )}
        </div>
        {modalBody && <div className="modal-body">{modalBody}</div>}
        {modalFooter && <div className="modal-footer">{modalFooter}</div>}
      </div>
    </div>
  );
  return createPortal(modalElem, rootModalElem);
}

export default Modal;
