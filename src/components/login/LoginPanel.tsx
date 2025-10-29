export default function LoginPanel() {
    return(
        <>
            <div className={"LoginPanel"}>
                <input type={"text"} placeholder={"Username"} id={"username"}/>
                <input type={"password"} placeholder={"Password"} id={"password"}/>
                <button id={"login_button"}>Log In</button>
            </div>
        </>
    )
}