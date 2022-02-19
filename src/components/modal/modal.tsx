import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import S from './modal.module.css';
import PropTypes from "prop-types";


Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
  };



function Modal (props:any) {
   
    return (
    
      <section className ={`${S.Modal} ${props.isOpen ? S.isOpen : ""}` }>
      <div className = {`${S.modal__content} `}>
      <button className = {`${S.modal__closeButton}`} onClick = {props.onClose}>
      <CloseIcon type="primary" />
      </button>
      {props.children}
      </div>
      </section>
      
    
    )
}

export default Modal;

