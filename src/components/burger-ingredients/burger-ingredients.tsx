import React from "react";
import PropTypes from "prop-types";
import { CurrencyIcon, Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import S from "./burger-ingredients.module.css"
import {ingredientItem} from "../../utils/shared/ingredient-item"

BurgerIngredients.propTypes = {
  buns: PropTypes.arrayOf(PropTypes.shape(ingredientItem)).isRequired,
  sauce: PropTypes.arrayOf(PropTypes.shape(ingredientItem)).isRequired,
  main: PropTypes.arrayOf(PropTypes.shape(ingredientItem)).isRequired,
  card: PropTypes.shape(ingredientItem),
  onCardClick: PropTypes.func.isRequired,
};

function BurgerIngredients(props: any) {
  const [current, setCurrent] = React.useState("one");
  return (
    <section className={`${S.burgerIngridients}`}>
      <h2 className="text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <div className={`${S.burgerIngridients__tabs}`}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${S.burgerCards__blocks}  custom-scroll`}>
        <h3 className={`${S.burgerIngridients__name} text_type_main-medium mt-10 mb-6`}>
          Булки
        </h3>
        <div className={`${S.burgerCards}`}>
          {props.buns.map((card: any) => (
            <div key={card._id} className={`${S.burgerElement} ml-4 mr-2 mt-6`} onClick = {() => {props.onCardClick(card)}}>
              <img className="ml-4" src={card.image} alt = 'картинка' />
              <div className={`${S.priceContainer} mt-1 mb-1`}>
                <p className=" text_type_digits-default mr-2">{card.price}</p>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className={`${S.burgerElement__name} text_type_main-default`}>
                {card.name}
              </h3>
            </div>
          ))}
        </div>
        <h3 className={`${S.burgerCards__name} text_type_main-medium mt-10 mb-6`}>
          Соусы
        </h3>
        <div className={`${S.burgerCards}`}>
          {props.sauce.map((card: any) => (
            <div key={card._id} className={`${S.burgerElement} ml-4 mr-2 mt-6`} onClick = {() => {props.onCardClick(card)}}>
              <img className="ml-4" src={card.image} alt = 'картинка'/>
              <div className={`${S.priceContainer} mt-1 mb-1`}>
                <p className="mr-2 text_type_digits-default">{card.price}</p>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className={`${S.burgerElement__name} text_type_main-default`}>
                {card.name}
              </h3>
            </div>
          ))}
        </div>
        <h3 className={`${S.burgerIngridients__name} text_type_main-medium mt-10 mb-6`}>
          Начинки
        </h3>
        <div className={`${S.burgerCards}`}>
          {props.main.map((card: any) => (
            <div key={card._id} className={`${S.burgerElement} ml-4 mr-2 mt-6`} onClick = {() => {props.onCardClick(card)}}>
              <img className="ml-4" src={card.image} alt= 'картинка' />
              <div className={`${S.priceContainer} mt-1 mb-1`}>
                <p className=" mr-2 text_type_digits-default">{card.price}</p>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className={`${S.burgerElement__name} text_type_main-default`}>
                {card.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
