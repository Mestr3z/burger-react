import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import S from "./modal-overlay.module.css";
import ReactDom from 'react-dom';
ModalOverlay.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};

function ModalOverlay(props: any) {
  return ReactDom.createPortal (
    <section onClick={e => (e.currentTarget === e.target) && props.onClose()}
      className={`${S.overlay} ${props.isOpen ? S.overlay_isOpened : ""}`}
    >
     
        {props.children}

    </section>,
    document.getElementById('portal')!
  );
}

export default ModalOverlay;
