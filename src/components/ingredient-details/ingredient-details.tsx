import React from "react";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import './ingredient-details.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import { createAdd } from "typescript";

IngridientsDetails.propTypes = {
    onClose: PropTypes.any,
    card : PropTypes.any,
    isOpen: PropTypes.any,
  };

function IngridientsDetails(props: any) {
  return (
    <ModalOverlay onClose = {props.onClose} isOpen = {props.isOpen}>
      <h2 className = 'ingridients-details__title mt-15 ml-10 text_type_main-large'>Детали ингредиента</h2>
      <div className = 'ingridients-details__container'>
      <img className = 'ingridients-details__image mb-4' src={props.card.image_large} />
      <p className = 'ingridients-details__name mb-8 text_type_main-medium'>{props.card.name}</p>
      <div className = 'ingridients-details__health-container mb-15'>
      <div className = 'ingridients-details__health mr-5'>
        <p className = 'ingridients-details__health-name text_type_main-small'>Калории, ккал</p>
        <p className = 'ingridients-details__health-count text_type_digits-default'>{props.card.calories}</p>
      </div>
      <div className = 'ingridients-details__health mr-5'>
        <p className = 'ingridients-details__health-name text_type_main-small'>Белки, г</p>
        <p className = 'ingridients-details__health-count text_type_digits-default'>{props.card.proteins}</p>
      </div>
      <div className = 'ingridients-details__health mr-5'>
        <p className = 'ingridients-details__health-name text_type_main-small'>Жиры, г</p>
        <p className = 'ingridients-details__health-count text_type_digits-default'>{props.card.fat}</p>
      </div>
      <div className = 'ingridients-details__health'>
        <p className = 'ingridients-details__health-name text_type_main-small'>Углеводы, г</p>
        <p className = 'ingridients-details__health-count text_type_digits-default'>{props.card.carbohydrates}</p>
      </div>

      </div>
      </div>
      </ModalOverlay>
  );
}

export default IngridientsDetails;
