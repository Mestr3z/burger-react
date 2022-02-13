import React from "react";
import {
    CloseIcon
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import PropTypes from "prop-types";
import './modal-overlay.css';


  ModalOverlay.propTypes = {
    onClose: PropTypes.any,
    isOpen: PropTypes.any,
    children: PropTypes.node,
  };



function ModalOverlay(props: any) {
    return(
        <section className = {`overlay ${props.isOpen ? 'overlay_is-opened' : ''}`}>
            <div className = 'overlay__content'>
            <button className = 'overlay__close-button' onClick = {props.onClose}>
         <CloseIcon type="primary" />
         </button>
         {props.children}
         </div>
        </section>
    )
}

export default ModalOverlay