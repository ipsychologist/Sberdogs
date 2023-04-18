import Logo from "./Logo";
import {
    StarFill,
    CartDash,
    PersonSquare,
    BoxArrowInRight,
    BoxArrowLeft
} from "react-bootstrap-icons";
const Header = ({user}) => {
    return <header>
        <Logo />
        <div className="search-block"></div>
        <nav className="header__menu">
            <a href="/">
                <StarFill title="Избранное" />
                </a>
            <a href="/">
                <CartDash title="Корзина" />
                </a>
            <a href="/">
                <PersonSquare title="Личный кабинет" />
                </a>
                <span>
                    <BoxArrowInRight title="Войти" />
                    <BoxArrowLeft title="Выйти"/>
                </span>  
        </nav>
    </header>
}
export default Header;