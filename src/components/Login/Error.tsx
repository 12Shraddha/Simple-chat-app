
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Error.css";

const Error = () => {
    const error_occured = useSelector((state: any) => state.login.error)
    console.log("ERROR CALLED", error_occured)
    
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        // message is empty (meaning no errors). Adjust as needed
        if (!error_occured) {
            setVisible(false);
            
            return;
        }
        // error exists. Display the message and hide after 5 secs
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
           
        }, 1000);
        return (() => clearTimeout(timer));
    }, [error_occured]);


    
return (
    <div>
        {visible ? (<div className="error-box">{error_occured}</div>) : null}
       
    </div>
  );
}

export default Error



