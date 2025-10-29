import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWarning} from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
    return(
        <>
            <h1>
                <FontAwesomeIcon icon={faWarning}/> Oh Nyao!
            </h1>
            <h1>Looks like you've hit a dead end!</h1>
            <h2>The page you're looking for wasn't found.</h2>
        </>
    )
}