import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import "./Home.css";

const Home = () => {
  const useselect = useSelector((state: any) => state.users.id);
  

  const handleLogout = (e:any) => {
    e.preventDefault();
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    
    

  }
    return (
      <div className="Home">
        <h3>Welcome!!</h3>
        <button
          className="btn-primary"
          type="submit"
          onClick={(e: any) => handleLogout(e)}
        >
          {useselect}
          Logout
        </button>
      </div>
    );
}

export default Home