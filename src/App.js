import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/login/Login"
import Signup  from "./components/signup/Signup"
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/login" exact>

            <Login />
          </Route>
          <Route path='/Signup'>

            <Signup />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App