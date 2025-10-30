import './BoxItem.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";


export default function BoxItem({name, size, locked}: {name: string, size: number, locked: boolean}): React.JSX.Element {
    function formatSize(bytes: number) {
        let formatted_size = '';
        if (bytes > 750*1024*1024)
            formatted_size = (((bytes / 1024) / 1024) / 1024).toFixed(2) + 'GB';
        else if (bytes > 750*1024)
            formatted_size = ((bytes / 1024) / 1024).toFixed(2) + 'MB';
        else if (bytes > 1024)
            formatted_size = (bytes / 1024).toFixed(2) + 'KB';
        else
            formatted_size = `${bytes}B`;

        return formatted_size;
    }

    return(
        <>
            <div className={"BoxItem"}>
                <div className={"left"}>
                    <p className={"size"}>{formatSize(size)}</p>
                    <p className={"name"}>{name}</p>
                </div>

                <div className={"right"}>
                    {locked && <FontAwesomeIcon icon={faLock}/>}
                </div>
            </div>
        </>
    )
}