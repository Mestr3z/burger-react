
import S from './order-details.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import Modal from "../modal/modal";


OrderDetails.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
  };

function OrderDetails(props: any) {
  return (<ModalOverlay isOpen = {props.isOpen}>
    <Modal onClose = {props.onClose}>
      <div className = {`${S.orderDetails__container} mb-8`}>
      <h2 className=" mt-30 mb-4 text_type_digits-large ">034536</h2>
      <p className=" mb-15 mt-4 text_type_main-medium mb-15">идентификатор заказа</p>
      <div className = {`${S.orderDetails__icon} mb-10`}/>
      <p className = 'mb-1 mt-5 text_type_main-default'>Ваш заказ начали готовить</p>
      <p className = 'mt-1 mb-30 text_type_main-default text_color_inactive '>Дождитесь ответа на орбитальной станции</p>
      </div>
      </Modal>
      </ModalOverlay>
  );
}

export default OrderDetails;
