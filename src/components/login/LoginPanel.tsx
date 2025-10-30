import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {BACKEND_DOMAIN} from "../../main.tsx";

export default function LoginPanel() {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const navigate = useNavigate();

    let allow_attempting = true;

    const login = async () => {
        if (!allow_attempting) return;
        allow_attempting = false;

        const loginResult = await fetch(`${BACKEND_DOMAIN}/api/login`, {
            method: 'POST',
            body: new URLSearchParams({
                username: usernameValue,
                password: passwordValue
            })
        });

        if (!loginResult.ok) {
            // TODO: dont use alert()
            alert('login failed');
            allow_attempting = true;
            return;
        }

        const json = await loginResult.json();

        const token = json.token;
        document.cookie = `token=${token}`;
        localStorage.setItem('auth', token);
        alert(`got token ${token}!`);
        navigate('/box', {replace: true});
    }


    return(
        <>
            <div className={"LoginPanel"}>
                <input onChange={(e) => {setUsernameValue(e.target.value)}}
                       value={usernameValue}
                       type={"text"}
                       placeholder={"Username"}
                       id={"username"}/>

                <input onChange={(e) => {setPasswordValue(e.target.value)}}
                       value={passwordValue}
                       type={"password"}
                       placeholder={"Password"}
                       id={"password"}/>

                <button id={"login_button"} onClick={login}>Log In</button>
            </div>
        </>
    )
}