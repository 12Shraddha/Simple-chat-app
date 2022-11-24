import React from 'react'
import "./Form.css";
// import { LoginAction, fetchUserRequest } from "../../Actions/LoginAction";
//import { loginAction } from "../../Actions/LoginAction";
import { useDispatch } from 'react-redux';
import {BsFillHeartFill} from "react-icons/bs"
//import { useNavigate }  from "react-router-dom";
import { userDetail} from '../../Core/ActionTypes/TrialActionsTypes';
import {getAction} from "../../Core/ActionCreator/TrialActionCreator"

interface props{
  formInput:any;
  setFormInput:React.Dispatch<React.SetStateAction<string>>;
  formPassword:any;
  setFormPassword:React.Dispatch<React.SetStateAction<string>>;
}
  const Form:React.FC<props> = ({formInput,setFormInput,formPassword,setFormPassword}) => {
  const onchange1=(e:React.ChangeEvent<HTMLInputElement>)=>( setFormInput(e.target.value));
  const onchange2=(e:React.ChangeEvent<HTMLInputElement>)=>( setFormPassword(e.target.value));
 
  const dipatch=useDispatch();
  const data:userDetail={
    id:formInput,
    password:formPassword,
    }

  return (
    <div>
      <form className='form-inline' onSubmit={(e: React.FormEvent) => {
        console.log("Form page",data);
       dipatch(getAction(data.id,data.password));
        e.preventDefault();
    
      }}>
          <h2>Let's Connect <BsFillHeartFill/></h2>
            <label className='input_'>User Name</label>
        <input className='input_box input_' type="text" onChange={onchange1} placeholder='UserName' value={formInput} />
        
            <label className='password_'>Password</label>
            <input className='input_box password_' type="password" placeholder='Password'onChange={onchange2} value={formPassword} />
            <button  className="btn-primary" type="submit">Submit</button>
        </form>
    </div>
  )
}
export default Form
