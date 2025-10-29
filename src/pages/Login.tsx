import './Login.css'
import LoginPanel from "../components/login/LoginPanel.tsx";
import AnimatedLayout from "../components/AnimatedLayout.tsx";

export default function Login() {
    return(
        <>
            <AnimatedLayout>
                <h1>Log In to OkayuCDN</h1>
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    <LoginPanel/>
                    <div className={"separator"}>or...</div>
                    <button className={"login-signup"} id={"login_signup_button"}>Sign Up Instead</button>
                </div>
            </AnimatedLayout>
        </>
    )
}