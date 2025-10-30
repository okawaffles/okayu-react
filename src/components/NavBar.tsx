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
                    <li><NavLink to={"/"}><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></NavLink></li>
                    <li><NavLink to={"/upload"}><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon></NavLink></li>
                    <li><NavLink to={"/box"}><FontAwesomeIcon icon={faBox}></FontAwesomeIcon></NavLink></li>
                    <li><NavLink to={"/settings"}><FontAwesomeIcon icon={faSliders}></FontAwesomeIcon></NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar