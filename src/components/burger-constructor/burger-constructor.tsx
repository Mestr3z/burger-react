import React from "react";
import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import { Tab, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import "./burger-constructor.css";
import PropTypes from "prop-types";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import image from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png";

BurgerConstructor.propTypes = {
  data: PropTypes.any,
  card: PropTypes.any,
  price: PropTypes.any,
  onClick: PropTypes.any,
};

function BurgerConstructor(props: any) {
    console.log(props.onClick)
  return (
    <section className="burger-constructor mt-25">
      <div className="burger-constructor__card burger-constructor__card__info_type_top mr-4 mb-4 ml-8">
        <div className="burger__constructor__info burger__constructor__info_type_top">
          <img className="burger__constructor_bun" src={image}></img>
          <h3 className="burger__constructor__name mr-5 text_type_main-default">
            Краторная булка N-200i (верх)
          </h3>
          <div className="burger__constructor__price-container mr-5 ">
            <p className="burger__constructor__price text_type_digits-default mr-2">
              20
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <div className="burger__constructor__delete-icon mr-8">
            <LockIcon type="secondary" />
          </div>
        </div>
      </div>
      <div className="burger__constructor__main-block custom-scroll ">
        {props.data.map((card: any) => (
          <div className="burger__constructor__card mr-2 mb-4 ">
            <DragIcon type="primary" />
            <div className="burger__constructor__info">
              <img className="" src={card.image_mobile}></img>
              <h3 className="burger__constructor__name mr-5 text_type_main-default">
                {card.name}
              </h3>
              <div className="burger__constructor__price-container mr-5 ">
                <p className="burger__constructor__price text_type_digits-default mr-2">
                  {card.price}
                </p>
                <CurrencyIcon type="primary" />
              </div>
              <div className="burger__constructor__delete-icon mr-8">
                <DeleteIcon type="primary" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="burger-constructor__card mr-4  mt-4 ml-8">
        <div className="burger__constructor__info burger__constructor__info_type_bottom">
          <img className="burger__constructor_bun" src={image}></img>
          <h3 className="burger__constructor__name mr-5 text_type_main-default">
            Краторная булка N-200i (низ)
          </h3>
          <div className="burger__constructor__price-container mr-5 ">
            <p className="burger__constructor__price text_type_digits-default mr-2">
              20
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <div className="burger__constructor__delete-icon mr-8">
            <LockIcon type="secondary" />
          </div>
        </div>
      </div>
      <div className = 'burger__constructor__order mt-10 pr-4'>
          <div className = 'burger__constructor__oder-prices mr-10'>
      <p className = "burger__constructor__order-price text_type_digits-medium mr-2">{props.price}</p>
      <CurrencyIcon type="primary" />
      </div>
      <Button onClick = {props.onClick} type="primary" size="medium">
  Оформить заказ
</Button>
</div>
    </section>
  );
}

export default BurgerConstructor;
