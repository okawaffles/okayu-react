import './BoxItem.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";


export default function BoxItem({name, size, locked}: {name: string, size: string, locked: boolean}) {
    return(
        <>
            <div className={"BoxItem"}>
                <div className={"left"}>
                    <p className={"size"}>{size}</p>
                    <p className={"name"}>{name}</p>
                </div>

                <div className={"right"}>
                    {locked && <FontAwesomeIcon icon={faLock}/>}
                </div>
            </div>
        </>
    )
}