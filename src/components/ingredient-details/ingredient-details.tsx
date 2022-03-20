import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import S from "./ingredient-details.module.css"
import Modal from "../modal/modal";
import {ingredientItem} from "../../utils/shared/ingredient-item"

IngredientsDetails.propTypes = {
  onClose: PropTypes.func,
  card: PropTypes.shape(ingredientItem),
  isOpen: PropTypes.bool,
};

function IngredientsDetails(props: any) {
  return (
    <ModalOverlay isOpen={props.isOpen} onClose={props.onClose}>
      <Modal onClose={props.onClose}>
      <h2 className=" mt-15 ml-10 text_type_main-large">
        Детали ингредиента
      </h2>
      <div className={`${S.ingredientsDetails__container}`}>
        <img
          className="mb-4"
          src={props.card.image_large}
          alt = 'картинка'
        />
        <p className={`${S.ingredientsDetails__name} mb-8 text_type_main-medium`}>
          {props.card.name}
        </p>
        <div className={`${S.ingredientsDetails__healthContainer} mb-10`}>
          <div className={`${S.ingredientsDetails__health} mr-5`}>
            <p className="text_type_main-small">Калории, ккал</p>
            <p className="mt-2 text_type_digits-default">
              {props.card.calories}
            </p>
          </div>
          <div className={`${S.ingredientsDetails__health} mr-5`}>
            <p className=" text_type_main-small">Белки, г</p>
            <p className=" mt-2 text_type_digits-default">
              {props.card.proteins}
            </p>
          </div>
          <div className={`${S.ingredientsDetails__health} mr-5`}>
            <p className=" text_type_main-small">Жиры, г</p>
            <p className=" mt-2 text_type_digits-default">{props.card.fat}</p>
          </div>
          <div className={`${S.ingredientsDetails__health}`}>
            <p className=" text_type_main-small">Углеводы, г</p>
            <p className=" mt-2 text_type_digits-default">
              {props.card.carbohydrates}
            </p>
          </div>
        </div>
      </div>
      </Modal>
    </ModalOverlay>
  );
}

export default IngredientsDetails;
