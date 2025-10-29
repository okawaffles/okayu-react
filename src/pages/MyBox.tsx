import '../components/misc/cascade.css'
import './MyBox.css'
import BoxItem from "../components/mybox/BoxItem.tsx";

export default function MyBox() {
    return(
        <>
            <h1>My Box</h1>

            <div className={"content"}>
                {/*<div className={"cascade"}>*/}
                {/*    <div></div>*/}
                {/*    <div></div>*/}
                {/*    <div></div>*/}
                {/*    <div></div>*/}
                {/*    <div></div>*/}
                {/*</div>*/}
                <BoxItem
                    name={"Box Item 1 Private"}
                    size={"50MB"}
                    locked={true}
                ></BoxItem>
                <BoxItem
                    name={"Box Item 2 Not Private"}
                    size={"50MB"}
                    locked={false}
                ></BoxItem>
            </div>
        </>
    )
}