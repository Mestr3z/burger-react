import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import S from "./modal.module.css";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  closeOverlay: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};


function Modal(props: any) {

  function handleEscClose(evt: any) {
    if (evt.key === "Escape") {
      props.onClose();
    }
  }

  function handleOverlayClose(evt: any) {
    if (evt.target.classList.contains("overlay")) {
      props.closeOverlay();
    }
  }


  React.useEffect(() => {
    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("mousedown", handleOverlayClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("mousedown", handleOverlayClose);
    };
  });

  return (
    <ModalOverlay isOpen={props.isOpen} onClose={props.onClose}>
    <section className={`${props.isOpen ? S.isOpen : ""}`}>
      <div className={`${S.modal__content} `}>
        <button className={`${S.modal__closeButton}`} onClick={props.onClose}>
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </div>
    </section>
    </ModalOverlay>
  );
}

export default Modal;
