import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/Login.css"
import { signInwithGoogle } from './Firebase';
import Home from './Components/Home'

const Login = () => { 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
<Home/>
  useEffect(()=>{
    if(localStorage.getItem("name")){
      console.log("Already Login")
      navigate("/Home")
      
    };
    // eslint-disable-next-line
  },[])

  
  const redirect=()=>{
    signInwithGoogle();
    navigate('/Home')
 
  }

  const handelLogin = () => {
    setIsLoggedIn(true);
    console.log("Handel Login")
    return redirect();
  }
  if (isLoggedIn) {
    return <Home />;
  }
  
  return (
    <div className='login-container'>
      <h1 >WelCome In Weather App</h1>
      <h3>Please Login </h3>
      <button onClick={handelLogin}>Login </button>
    </div>
  )
}

export default Login