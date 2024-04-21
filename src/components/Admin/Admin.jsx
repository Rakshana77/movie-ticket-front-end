import Authform from "../Auth/Authform.jsx";
import { sendadminauthrequest } from "../../api-helpers/api-helpers.js";
import {useDispatch} from "react-redux"
import { adminactions } from "../../store/indexx.js";
const Admin = () => {
    const dispatch = useDispatch();
    const onresreceived = (data) => {
        console.log(data);
        dispatch(adminactions.login())
        localStorage.setItem("adminid", data.id);
        localStorage.setItem("token", data.token);
//         if (typeof localStorage !== "undefined") {
//   localStorage.setitem("adminid", data.id);
//   localStorage.setitem("token", data.token);
// }

    };
    

    const getdata = (data) => {
        console.log("admin", data);
        sendadminauthrequest(data.inputs).then(onresreceived).catch(err => console.log(err));
    }
    return <div><Authform onSubmited={getdata} isadmin={true}/></div>;
    
};

export default Admin;