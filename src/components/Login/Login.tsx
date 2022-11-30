import "./Login.css";
import React,{useState} from 'react';
import Form from "./Form";
import image1 from "../image/agora-small-groups.jpg";
import { useSelector } from "react-redux";
import PageLoader from "./PageLoader";
import Home from "../HomePage/Home";




const Login= () => {
  const [formInput,setFormInput]=useState<string>("");
  const [formPassword, setFormPassword] = useState<string>("");
    
const login_status = useSelector((state: any) => state.login);
console.log("Loading called", login_status);
const func = (login_status: any) => {
  if (login_status.isloading === true) {
    <PageLoader />;
  }
  if (login_status.error !== null) {
    alert(login_status.error);
  }
  if (login_status.id!=="") {
    return <Home />;
  }
};
  return (
    <div>
      <Form
        formInput={formInput}
        setFormInput={setFormInput}
        formPassword={formPassword}
        setFormPassword={setFormPassword}
      ></Form>

      <img src={image1} alt="xyz" />
      <div>
       {func(login_status)}
      </div>

    </div>
  );
}

export default Login