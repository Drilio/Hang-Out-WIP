import {NavLink} from "react-router-dom";
import "./Header.css";
export default function Header()
{
    return(
        <nav className="navContainer">
            <ul className="navList">
                <li>
                    <NavLink to="/">
                    Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="">
                    Connexion
                    </NavLink>
                </li>
                <li>
                    <NavLink to="">
                    Trouver
                        </NavLink>
                </li>
            </ul>
        </nav>
    )
}
