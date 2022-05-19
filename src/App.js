import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/login/Login"
import Signup  from "./components/signup/Signup"
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/" exact>
          <Link to="/Signup">Sign Up</Link>

            <Login />
          </Route>
          <Route path='/Signup'>
          <Link to="/Login">Login</Link>

            <Signup />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App