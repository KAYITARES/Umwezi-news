import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt="umwezi logo" />
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="tel:+250785627690" className="nav-links_link">
                            Tel:+250785627690
                        </a>
                    </li>
                    <li>
                        <Button name="Sign-In" backgrounds="#161c30" textColor="white" />
                    </li>
                </ul>
            </nav>
            <div className="category">
                <ul className="category-links">
                    <li>
                        <Link href="@" className="category-links--link">
                            Ubuzima
                        </Link>
                    </li>
                    <li>
                        <Link href="@" className="category-links--link">
                            Politike
                        </Link>
                    </li>
                    <li>
                        <Link href="@" className="category-links--link">
                            Ubukungu
                        </Link>
                    </li>
                    <li>
                        <Link href="@" className="category-links--link">
                            Uburezi
                        </Link>
                    </li>
                    <li>
                        <Link href="@" className="category-links--link">
                            Iyobokamana
                        </Link>
                    </li>
                    <li>
                        <Link href="@" className="category-links--link">
                            imikino
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Header;
