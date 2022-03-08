import React from "react";
import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import S from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import {
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  })),
  card: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  }),
  price: PropTypes.number,
  onClick: PropTypes.func,
};

function BurgerConstructor(props: any) {
  const [bun, setBun] = React.useState({
    _id: "",
    name: "",
    type: "",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "",
    image_mobile: "",
    image_large: "",
    __v: 0,
  });
  React.useEffect(() => {
    const topBun = props.data.find((card: any) => {
      if (card.name === "Краторная булка N-200i") {
        setBun(card);
      }
    });
  }, [props.data]);

  const mainCards = props.data.filter((card: any) => {
    if (card.type === "sauce" || card.type === "main") {
      return card;
    }
  });
  return (
    <section className={`${S.burgerConstructor} ml-10 mt-25`}>
      <div className="mr-5">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={`${S.burgerConstructor__mainBlock} pr-2 custom-scroll`}>
        {mainCards.map((card: any) => (
          <div className={`${S.burger__constructor__card}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={card.name}
              price={card.price}
              thumbnail={card.image}
            />
          </div>
        ))}
      </div>
      <div className="mr-5">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={`${S.burgerConstructor__order} mt-10 pr-4`}>
        <div className={`${S.burgerConstructor__orderPrices} mr-10`}>
          <p className="text_type_digits-medium mr-2">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={props.onClick} type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
