import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import S from "./modal.module.css";
import PropTypes from "prop-types";

modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

function modal(props: any) {
  return (
    <section className={`${S.Modal} ${props.isOpen ? S.isOpen : ""}`}>
      <div className={`${S.modal__content} `}>
        <button className={`${S.modal__closeButton}`} onClick={props.onClose}>
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </div>
    </section>
  );
}

export default modal;
