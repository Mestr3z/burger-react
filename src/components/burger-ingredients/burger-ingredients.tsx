import React from "react";
import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import "./burger-ingredients.css";
import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

BurgerIngredients.propTypes = {
  buns: PropTypes.any,
  sauce: PropTypes.any,
  main: PropTypes.any,
  card: PropTypes.any,
  onCardClick: PropTypes.any,
};

function BurgerIngredients(props: any) {
  const [current, setCurrent] = React.useState("one");
  return (
    <section className="burger-ingridients">
      <h2 className="text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <div className="burger-ingridients__tabs">
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
      <div className="bugreg-cards__blocks custom-scroll ">
        <h3 className="burger-cards__name burger-cards__name_buns text_type_main-medium mt-10 mb-6">
          Булки
        </h3>
        <div className="burger-cards_buns burger-cards">
          {props.buns.map((card: any) => (
            <div className="burger-element ml-4 mr-2 mt-6" onClick = {() => {props.onCardClick(card)}}>
              <img className="ml-4" src={card.image} />
              <div className="price-container mt-1 mb-1">
                <p className="price-container__price text_type_digits-default mr-2">{card.price}</p>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="burger-element__name text_type_main-default">
                {card.name}
              </h3>
            </div>
          ))}
        </div>
        <h3 className="burger-cards__name burger-cards__name_sauce text_type_main-medium mt-10 mb-6">
          Соусы
        </h3>
        <div className="burger-cards_sauce burger-cards">
          {props.sauce.map((card: any) => (
            <div className="burger-element  ml-4 mr-2 mt-6 " onClick = {() => {props.onCardClick(card)}}>
              <img className="ml-4" src={card.image} />
              <div className="price-container mt-1 mb-1">
                <p className="price-container__price mr-2 text_type_digits-default">{card.price}</p>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="burger-element__name text_type_main-default">
                {card.name}
              </h3>
            </div>
          ))}
        </div>
        <h3 className="burger-cards__name burger-cards__name_main text_type_main-medium mt-10 mb-6">
          Начинки
        </h3>
        <div className="burger-cards_main burger-cards">
          {props.main.map((card: any) => (
            <div className="burger-element ml-4 mr-2 mt-6" onClick = {() => {props.onCardClick(card)}}>
              <img className="ml-4" src={card.image} />
              <div className="price-container mt-1 mb-1">
                <p className="price-container__price mr-2 text_type_digits-default">{card.price}</p>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="burger-element__name text_type_main-default">
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
