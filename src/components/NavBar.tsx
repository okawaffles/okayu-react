import './NavBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBox, faHouse, faSliders, faUpload} from "@fortawesome/free-solid-svg-icons"
import {NavLink} from "react-router-dom";

function NavBar() {
    return(
        <>
            <nav>
                <img src={"https://okayucdn.com/assets/images/logo.png"} alt={"OkayuCDN Logo"} />
                <ul>
                    <li><NavLink to={"/"}><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>  Home</NavLink></li>
                    <li><NavLink to={"/upload"}><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon> Upload</NavLink></li>
                    <li><NavLink to={"/box"}><FontAwesomeIcon icon={faBox}></FontAwesomeIcon> My Box</NavLink></li>
                    <li><NavLink to={"/settings"}><FontAwesomeIcon icon={faSliders}></FontAwesomeIcon> My Account</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar