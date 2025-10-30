import '../components/misc/cascade.css'
import './MyBox.css'
import BoxItem from "../components/mybox/BoxItem.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {BACKEND_DOMAIN} from "../main.tsx";

export default function MyBox() {
    const navigate = useNavigate();
    let [show_loading, setShowLoading] = useState(true);
    let [contentListing, setContentListing] = useState([] as Array<{name: string, size: number, date: number}>);
    let [protectedFiles, setProtectedFiles] = useState([] as Array<string>);

    useEffect(() => {
        fetch(`${BACKEND_DOMAIN}/api/whoami`, {
            headers: {
                'Authorization': localStorage.getItem('auth') || 'none'
            }
        }).catch(() => {
            navigate('/login');
        }).then(async () => {
            // i am logged in
            const box_response = await fetch(`${BACKEND_DOMAIN}/api/storage`, {
                headers: {
                    'Authorization': localStorage.getItem('auth') || 'none'
                }
            });
            if (!box_response.ok) return navigate('/login');

            const box_data = await box_response.json();
            setContentListing(box_data.content);
            setProtectedFiles(box_data.protected_files);
            setShowLoading(false);
        });
    }, []);

    return(
        <>
            <h1>My Box</h1>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className={"content"} id={"contentList"}>
                    {show_loading ? <div className={"cascade"}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> : contentListing.map((item, index) => (
                        <BoxItem key={index} name={item.name} size={item.size} locked={protectedFiles.includes(item.name)}/>
                    ))}
                </div>
            </div>
        </>
    )
}