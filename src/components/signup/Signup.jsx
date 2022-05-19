import React from 'react'
import "./signup.scss";
import {Link} from "react-router-dom"
function Signup() {
  return (
    <div className='signup__main'>
      <div className="signup">
        <div className="top__right">

          <p>Already have an account?
          <Link id='links__login' to="./login">Login here</Link>
          </p>

          </div>
          <div className="body__right">
            <div className="container">
            <form>
              <div className="input__group">
                <h5>
                  First Name
                </h5>
                <input type="text" name="FirstName" id="firstName" />                
                <h5>
                  Last Name
                </h5>
                <input type="text" name="LastName" id="lastName" />                
                <h5>
                  email
                </h5>
                <input type="Email" name="email" id="email" />                
                <h5>
                  Password
                </h5>
                <input type="password" name="Password" id="password1" />                
                <h5>
                  Confirm password
                </h5>
                <input type="password" name="Password" id="password2" />
              </div>
                <input type="submit" value= "Submit"/>
            </form>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Signup