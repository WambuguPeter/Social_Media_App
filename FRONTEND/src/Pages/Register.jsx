import React from 'react'
import '../styles/PageStlyles/Register.scss'
import { useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';


const Register = () => {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        username: yup.string().required("Username is required").max(12, "Username can't be more than 12 characters"),
        email: yup.string().required("Email is required").email("Invalid Email"),
        password: yup.string().required("Password is required").min(4, "Password must be at least 4 characters"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
      });
      

     const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
     });
     const onSubmit = (data) => {
        localStorage.setItem('userData', JSON.stringify(data));
        navigate("/login")
    };

  return (
    <div className='RegisterPage' >
        <div className="register-card">
            <h1>Register with Social-M</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='form'>
             <input type="text" placeholder="Enter the Username" {...register("username")} />
             {errors.username && <p>{errors.username.message}</p>}
             <input type="email" placeholder="Enter Email" {...register("email")} />
             {errors.email && <p>{errors.email.message}</p>}
             <input type="password" placeholder="Password" {...register("password")} />
             {errors.password && <p>{errors.password.message}</p>}
             <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
             {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
             <button type="submit">Register</button>
           </form>
           <span onClick={() => navigate("/login")} >Do you have an account? Login</span>

        </div>
    </div>
  )
}

export default Register


