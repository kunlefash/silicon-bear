import React from 'react'
import "./signup.css"
import { useState, useRef } from "react";

export function Signup() {
    const [email, setEmail] = useState("")
    const[password, setPassword]= useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

  
    const handleFinish = () => {
        setEmail(passwordRef.current.value)
    }


    


  return (
      <div className="container">
          <form >
              <h1>Sign Up</h1>
              <div className="divider"></div>
                  <div className="form">
                      <div className="field">
                          <label >Email</label>
                          <input type="email" placeholder="email address" ref={emailRef}/>

                      </div>
                      <div className="field">
                          <label>Password</label>
                          <input type="password" placeholder="password" ref={passwordRef}/>
                      </div>
                      <button className="button" onClick={handleFinish}>Sign Up</button>
                  </div>
          </form>
      </div>
  )
  }

export default Signup