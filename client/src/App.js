
import './App.css';



import Login from './components/Login';

import Signup from './components/Signup';

import Home from './components/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      
      <Route exact path="/login"  component={Login}/>

      <Route exact path="/signup"  component={Signup}/>

      <Route exact path="/home"  component={Home}/>
      
    </div>
    </Router>
  );
}

export default App;
