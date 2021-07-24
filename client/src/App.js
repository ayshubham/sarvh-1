import { ThemeProvider, createTheme } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
const Theme = createTheme({
  palette: {
    primary: {
      main : "#000000"
    },
    secondary: {
      main : "#262A53"
    }
  },
  
});



function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
