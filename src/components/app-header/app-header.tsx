
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import S from "./app-header.module.css";


function AppHeader() {
  return (
    <header className={`${S.header}`}>
      <nav className={`${S.header__buttonsContainer}`}>
        <div className={`${S.header__constructorButton} mr-2 pt-4 pb-4 pr-5 pl-5`}>
          <BurgerIcon type="primary" />
          <p className={`${S.header__text} ml-2`}>Конструктор</p>
        </div>
        <div className={`${S.header__listButton} pt-4 pb-4 pr-5 pl-5`}>
          <ListIcon type="secondary" />
          <p className={`${S.header__text}  text_color_inactive ml-2`}>Лента заказов</p>
        </div>
      </nav>
      <Logo />
      <nav className={`${S.header__profileButton} pt-4 pb-4 pr-5 pl-5`}>
        <ProfileIcon type="secondary" />
        <p className={`${S.header__text} text_color_inactive ml-2`}>Личный кабинет</p>
      </nav>
    </header>
  );
}

export default AppHeader;
