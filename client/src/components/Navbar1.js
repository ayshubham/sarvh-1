import {
  AppBar,
  Button,
  ButtonGroup,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #A9A9A9",
    display: "flex",
    justifyContent: "space-around",
  },
  logo: {
    maxWidth: 35,
  },
  input: {
    backgroundColor: "#FFE3E3",
    paddingLeft: "0.4%",
    borderRadius: 5,
    display : "flex",
    alignItems : "center"
  },
  inputBase : {
    width: 275,
    fontFamily  : "SourceSansPro",
    marginLeft: 20,
    fontSize : "1rem"
  },
  loginButton : {
      width : 100
  }
});

const NavbarWithLogin = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.navbar}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Button>MALE</Button>
          <Button>FEMALE</Button>
          <Button>ACCESSORIES</Button>
          <div className={classes.input}>
              <SearchIcon color="primary"/>
            <InputBase placeholder="Search for product and more" className={classes.inputBase}></InputBase>
          </div>
          <ButtonGroup>
          <Button variant="contained" color="secondary" className={classes.loginButton}>SIGN UP</Button>
          <Button variant="outlined" color="secondary" className={classes.loginButton}>LOGIN</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarWithLogin;
