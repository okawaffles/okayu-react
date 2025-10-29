import NavBar from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";
import BetaBanner from "../components/BetaBanner.tsx";

export default function RootLayout() {

    return (
        <>
            <NavBar/>
            <main style={{position: "relative", minHeight: '60vh'}}>
                <Outlet key={location.pathname}/>
            </main>
            <BetaBanner/>
        </>
    )
}