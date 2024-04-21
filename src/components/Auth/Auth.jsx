import Authform from "./Authform.jsx";
import { senduserauthrequest } from "../../api-helpers/api-helpers.js"
import { useDispatch } from "react-redux";
import { useractions } from "../../store/indexx.js";

const Auth = () => {
    const dispatch = useDispatch();
    const onresreceived = (data) => {
        

        console.log(data);
        dispatch(useractions.login())
        localStorage.setItem("userid",data.id)
    }
    const getdata = (data) => {
        console.log("Auth", data);
        senduserauthrequest(data.inputs,data.signup).then(onresreceived).catch(err => console.log(err));

    }
    return <div>
        <Authform onSubmited={getdata} isadmin={false} />
    </div>
    
};
export default Auth;