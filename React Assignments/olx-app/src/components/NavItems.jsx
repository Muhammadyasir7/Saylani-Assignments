import "../css/style.scss"
import { IoCarSportOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import LOGO from "../assets/OLX-logo.png"
import LARGELOGO from "../assets/OLX-Symbol.png"
import ICONBORDER from "../assets/iconSellBorder.svg"
import SAVEPLUS from "../assets/save-plus.svg"
import InputSearch from "./InputSearch/InputSearch";
import InputLocation from "./InputSearch/InputLocation";

function NavbarList(){
    return (
        <div className="navbar-items">
            <nav>
                <ul>
                    <li>
                        <img src={LOGO} alt="" />
                    </li>
                    <li><span><IoCarSportOutline /></span>motors</li>
                    <li><span><HiOutlineBuildingOffice2 /></span>property</li>
                </ul>
            </nav>
            <div className="sec-div">
                <ul>
                    <li><img className="largeLogo" src={LARGELOGO} alt="" /></li>
                    <li><InputLocation /></li>
                    <li><InputSearch/></li>
                    <li className="login-btn">Login</li>
                    <li className="iconBorder">
                        <img src={ICONBORDER} alt="" />
                        <img className="plus-icon" src={SAVEPLUS} alt="" />
                        <span>SELL</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarList;
