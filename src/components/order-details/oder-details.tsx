import React from "react";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import './order-details.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

OrderDetails.propTypes = {
    onClose: PropTypes.any,
    isOpen: PropTypes.any,
  };

function OrderDetails(props: any) {
  return (
    <ModalOverlay onClose = {props.onClose} isOpen = {props.isOpen}>
      <div className = 'order-details__container mt-30 mb-8'>
      <h2 className="order-details__code text_type_digits-large ">034536</h2>
      <p className="order-details__id text_type_main-medium mb-15">идентификатор заказа</p>
      <div className = 'oder-details__icon mb-15'>
      <CheckMarkIcon type="primary" />
      </div>
      <p className = 'order-details__start mb-2 text_type_main-default'>Ваш заказ начали готовить</p>
      <p className = 'oder-details__wait mb-30 text_type_main-default text_color_inactive '>Дождитесь ответа на орбитальной станции</p>
      </div>
      </ModalOverlay>
  );
}

export default OrderDetails;
