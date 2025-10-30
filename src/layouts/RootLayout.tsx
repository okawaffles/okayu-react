import NavBar from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";
import BetaBanner from "../components/BetaBanner.tsx";

function LightBackground() {
    const lights = Array.from({ length: 5 }).map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 25 + Math.random() * 15;
        const delay = Math.random() * 20;
        const color =
            i === 0 ? "rgba(255,180,255,0.4)" :
                i === 1 ? "rgba(150,200,255,0.4)" :
                    "rgba(255,255,200,0.3)";
        return (
            <div
                key={i}
                className="light"
                style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`
                }}
            />
        );
    });
    return <div className="lights">{lights}</div>;
}

export default function RootLayout() {

    return (
        <>
            <LightBackground/>
            <NavBar/>
            <main style={{position: "relative", minHeight: '60vh'}}>
                <Outlet key={location.pathname}/>
            </main>
            <BetaBanner/>
        </>
    )
}