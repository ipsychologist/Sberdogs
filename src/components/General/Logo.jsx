import LogoImg from "../../assents/images/logo.png";
const Logo = () => <a className="logo" href="/"> 
    {/*<span className="logo__pic"></span>*/}
    <img src={LogoImg} alt="DogFood" />
    <span className="logo__text">DogFood</span>
</a>
export default Logo;
//указание пути в ректе как "/" ведет на главную страницу