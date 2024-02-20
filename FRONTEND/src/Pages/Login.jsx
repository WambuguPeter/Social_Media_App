import React from 'react'
import '../styles/PageStlyles/Login.scss'
import { useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';

const Login = () => {
  const {handleSubmit, register}= useForm();
  const navigate = useNavigate();

  const SubmitEvent = (data) => {
    // Retrieve user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem('userData'));
  
    console.log('Stored user details:', userDetails);
  
    if (
      userDetails &&
      userDetails.username === data.username &&
      userDetails.password === data.password
    ) {
      navigate("/major");
      
    } else {    
      console.log('Entered username:', data.username);
      console.log('Entered password:', data.password);
      
      alert("Invalid Username or Password. Try again.");
    }
  };
  



  return (
    <div className='loginPage' >
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(SubmitEvent)} >
          <input type="text" placeholder='Username' {...register('username')} />
          <input type="text" placeholder='password' {...register('password')} />
          <button type="submit">Login</button>          
        </form>
        <span onClick={() => navigate('/register')} >Don't have an account? Register</span>
      </div>
    </div>
  )
}

export default Login

