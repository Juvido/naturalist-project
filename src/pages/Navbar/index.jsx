import Logo from "../../assets/images/logo.png"
import style from "./style.module.css"


export function Navbar () {
    return (
        <nav className={style.navbar}>
            <img src={Logo} alt="naturalist-logo" className={style.iconLogo}/>
            <p className={style.text}> Naturalist</p>
        </nav>
    )
}