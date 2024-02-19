import { useRouter } from 'next/navigation'
import { useRef, useState } from "react";
// import { useState, useEffect } from 'react'
const LoginForm = () => {
    const router = useRouter();
    const [isValid,setIsValid] = useState(true)
    const email = useRef("")
    const password = useRef("")
    const login = (e) =>{
        e.preventDefault();
        const Email = "email@gmail.com"
        const Password = "123"
        if ( Email.toLowerCase().trim() == email.current.value.toLowerCase().trim() && Password.trim() == password.current.value.trim() )
        {
            const client= { "email" :email.current.value.toLowerCase().trim(),"name":"Abdo"  }
            sessionStorage.setItem("Client",JSON.stringify(client))
            setIsValid(true)
            router.push('/home');
            console.log("Loged Success",email.current.value)
        }else{
            setIsValid(false)
        
        }
       
    }

  return (
  
       <form className="card-body" onSubmit={login}>
        <p className={`${ isValid ? 'hidden' : 'text-error text-center'}`}> Login failed. Email or password is incorrect. </p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className={`${ isValid ? 'input input-bordered input-primary' : 'input input-bordered input-error'}`} required ref={email} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className={`${ isValid ? 'input input-bordered input-primary' : 'input input-bordered input-error'}`} required ref={password} />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
   
  )
}

export default LoginForm
