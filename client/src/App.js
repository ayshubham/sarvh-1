
import './App.css';



import Login from './components/Login';

import Signup from './components/Signup';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      
      <Route exact path="/login"  component={Login}/>

      <Route exact path="/signup"  component={Signup}/>
      
    </div>
    </Router>
  );
}

export default App;
