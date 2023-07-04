import axios from 'axios';
import React, { useState , useEffect ,useContext} from 'react'
import { useForm } from "react-hook-form"
import { doApiMethod, API_URL } from '../services/apiService';
import { AuthContext } from '../services/context';
import { Navigate  } from 'react-router-dom';



export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  // const { userData, setUserData } = useState(" ");
  useEffect(() => {

  }, [isLoggedIn])


  const onSubForm = (bodyData) => {
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    console.log(bodyData)
    doApiForm(bodyData);
  }

  const doApiForm = async (bodyData) => {
    let url = API_URL + "/users/login"
    try {
      let resp = await doApiMethod(url,"POST",bodyData);
      console.log(resp.data)
      // setUserData(resp.data.user);
      // console.log(userData);
      localStorage.setItem('token', resp.data.token);
      let userData = resp.data.user
      console.log(userData);
      localStorage.setItem('name', userData.name);
      localStorage.setItem('role', userData.role);
      console.log(isLoggedIn);


    }
    catch (err) {
      console.log(err.response);
      alert("User or password worng, or service down");
    }
  }


  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  })

  let passwordRef = register("password", { required: true, minLength: 3 });

  return (
    <div>
      {!isLoggedIn  ? (
        <div className='container'>
          <h1 className='text-center text-light'>Log in</h1>
          <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow mx-auto '>
            <label className='text-light'>Email:</label>
            <input {...emailRef} type="text" className='form-control' />
            {errors.email && <div className="text-danger">Enter valid email</div>}
    
            <label  className='text-light'>Password:</label>
            <input {...passwordRef} type="text" className='form-control' />
            {errors.password && <div className="text-danger">Enter min 3 charts password</div>}
            <button className='btn btn-dark mt-3'>Log in</button>
          </form>
        </div>
      ):
      (
        
        <Navigate  to={{ pathname: '/' }}> </Navigate>
      )}
      
      </div>

  )
}
