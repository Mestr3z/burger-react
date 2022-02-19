import React from "react";
import {
  Button,
  ConstructorElement
} from "@ya.praktikum/react-developer-burger-ui-components";
import S from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import {
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";


BurgerConstructor.propTypes = {
  data: PropTypes.array,
  card: PropTypes.object,
  price: PropTypes.number,
  onClick: PropTypes.func,
};

function BurgerConstructor(props: any) {
  let image = '';
  props.data.map((card: any) =>{
    if (card.name === 'Краторная булка N-200i') {
      image = card.image
    }
  } )

const mainCards = props.data.filter((card:any) => {
    if(card.type === 'sauce' || card.type === 'main'){
      return card
    }
  })
  return (
    <section className={`${S.burgerConstructor} ml-10 mt-25`}>
      <div className = 'mr-5'>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={image}
      />
      </div>
      <div className={`${S.burgerConstructor__mainBlock} pr-2 custom-scroll`}>
        {mainCards.map((card: any) => (
          <div className ={`${S.burger__constructor__card}`}>
            <DragIcon type = 'primary'/>
         <ConstructorElement
         text={card.name}
         price={card.price}
         thumbnail={card.image}
       />
       </div>
        ))}
      </div>
      <div className = 'mr-5'>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={image}
      />
     </div>
      <div className={`${S.burgerConstructor__order} mt-10 pr-4`}>
        <div className={`${S.burgerConstructor__orderPrices} mr-10`} >
          <p className="text_type_digits-medium mr-2">
            {props.price}
          </p>
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
