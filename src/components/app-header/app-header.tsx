import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import "./app-header.css";
import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";

function AppHeader() {
  return (
    <header className="header">
      <nav className="header__buttons-container">
        <div className="header__constructor-button mr-2 pt-4 pb-4 pr-5 pl-5">
          <BurgerIcon type="primary" />
          <p className="header__text ml-2">Конструктор</p>
        </div>
        <div className="header__list-button pt-4 pb-4 pr-5 pl-5">
          <ListIcon type="secondary" />
          <p className="header__text text_color_inactive ml-2">Лента заказов</p>
        </div>
      </nav>
      <Logo />
      <nav className="header__profile-button pt-4 pb-4 pr-5 pl-5">
        <ProfileIcon type="secondary" />
        <p className="header__text text_color_inactive ml-2">Личный кабинет</p>
      </nav>
    </header>
  );
}

export default AppHeader;
