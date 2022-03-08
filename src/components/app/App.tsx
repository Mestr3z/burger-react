import React from "react";
import S from "./App.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import getInitialCards from "../../utils/Api";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import OrderDetails from "../order-details/oder-details";
import IngredientsDetails from "../ingredient-details/ingredient-details";

function App() {
  const [buns, setBuns] = React.useState([]);
  const [sauce, setSauce] = React.useState([]);
  const [main, setMain] = React.useState([]);
  const [burgerConstructorCards, setBurgerConstructorCards] = React.useState(
    []
  );
  const [burgerCounstructorPrices, setBurgerCounstructorPrices] =
    React.useState(40);
  const [modalOverlayOrderOpen, setModalOverlayOrderOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [modalOverlayIngredientsOpen, setModalOverlayIngredientsOpen] =
    React.useState(false);

  function handleCardClick(data: any) {
    setSelectedCard(data);
    setModalOverlayIngredientsOpen(true);
  }

  function openOverlay() {
    setModalOverlayOrderOpen(true);
  }

  function closeOverlay() {
    setModalOverlayIngredientsOpen(false);
    setModalOverlayOrderOpen(false);
  }

  function handleEscClose(evt: any) {
    if (evt.key === "Escape") {
      closeOverlay();
    }
  }

  function handleOverlayClose(evt: any) {
    if (evt.target.classList.contains("overlay")) {
      closeOverlay();
    }
  }


  React.useEffect(() => {
    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("mousedown", handleOverlayClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("mousedown", handleOverlayClose);
    };
  });

  React.useEffect(() => {
    getInitialCards().then((res) => {
      const data = res.data;

      const bun = data.filter((card: any) => {
        if (card.type === "bun") {
          
          return card;
          
        }
      });
      setBuns(bun);

      const initialValue = 0;
      const sumWithInitial = data.reduce(
        (previousValue: any, currentValue: any) => previousValue + currentValue.price,
        initialValue
      );
      setBurgerCounstructorPrices(sumWithInitial);
      
      setBurgerConstructorCards(data);

      const sauce = data.filter((card: any) => {
        if (card.type === "sauce") {
          setBurgerCounstructorPrices(burgerCounstructorPrices + card.price);
          return card;
        }
      });

      setSauce(sauce);

      const main = data.filter((card: any) => {
        if (card.type === "main") {
          setBurgerCounstructorPrices(burgerCounstructorPrices + card.price);
          return card;
        }
      });

      setMain(main);
    });
  }, []);
  React.useEffect(() => {}, []);
  return (
    <div className={`${S.main}`}>
      <AppHeader />
      <div className={`${S.burgers} mb-10`}>
        <BurgerIngredients
          buns={buns}
          sauce={sauce}
          main={main}
          onCardClick={handleCardClick}
        />
        <BurgerConstructor
          data={burgerConstructorCards}
          price={burgerCounstructorPrices}
          onClick={openOverlay}
        />
      </div>
      <OrderDetails onClose={closeOverlay} isOpen={modalOverlayOrderOpen} />
      <IngredientsDetails
        onClose={closeOverlay}
        card={selectedCard}
        isOpen={modalOverlayIngredientsOpen}
      />
    </div>
  );
}


export default App;
