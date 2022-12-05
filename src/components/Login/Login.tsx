import "./Login.css";
import React,{CSSProperties, useState} from 'react';
import Form from "./Form";
import image1 from "../image/agora-small-groups.jpg";
import { useSelector } from "react-redux";
import Home from "../HomePage/Home";
import Error from "./Error";
import ClipLoader from "react-spinners/ClipLoader";

const Login= () => {
  const [formInput,setFormInput]=useState<string>("");
  const [formPassword, setFormPassword] = useState<string>("");

    
const login_status = useSelector((state: any) => state.login);
  console.log("Loading called", login_status);
  
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  position: "absolute",
  top: "392px",
  left:"220px",
};

  return (
    <div>
      <Form
        formInput={formInput}
        setFormInput={setFormInput}
        formPassword={formPassword}
        setFormPassword={setFormPassword}
      ></Form>
      {login_status.isLoading ? (
        <ClipLoader
          color={"#fff"}
          cssOverride={override}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : null}
      {login_status.error ? <Error /> : null}

      {login_status.id ? <Home /> : null}

      <img src={image1} alt="xyz" />
    </div>
  );
}

export default Login