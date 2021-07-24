import { ThemeProvider, createTheme } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
