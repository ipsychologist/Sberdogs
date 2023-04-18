import Logo from "./Logo";
import {
    StarFill,
    CartDash,
    PersonSquare,
    BoxArrowInRight,
    BoxArrowLeft
} from "react-bootstrap-icons";


const Header = ({user, upd}) => {
    const login = () => {
        localStorage.setItem("userStore", "Amica");
        upd("Amica");
    }
    const logout = () => {
        localStorage.removeItem("userStore");
        upd(null);
    }
    return <header>
        <Logo />
        <div className="search-block"></div>
        <nav className="header__menu">
 {/* условие если юзер залогинился то он видит этот блок, если нет то не видит, называется условный рендеринг            */}
           {user && <>
             <a href="/">
             <StarFill title="Избранное" />
             </a>
         <a href="/">
             <CartDash title="Корзина" />
             </a>
         <a href="/">
             <PersonSquare title="Личный кабинет" />
             </a>
             </>
           }
                <span>
                    {!user && <BoxArrowInRight title="Войти" onClick={login} />}
                    {user && <BoxArrowLeft title="Выйти" onClick={logout}/>}
                </span>  
        </nav>
    </header>
}
export default Header;