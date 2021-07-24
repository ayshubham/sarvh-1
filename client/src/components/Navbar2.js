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
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";

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
    display: "flex",
    alignItems: "center",
  },
  inputBase: {
    width: 275,
    fontFamily: "SourceSansPro",
    marginLeft: 20,
    fontSize: "1rem",
  },
  loginButton: {
    width: 100,
  },
  roundedButton: {
    borderRadius: 100,
  },
  marginButtonGroup :{
      marginLeft : "7%"
  },
  profileButton : {
      width : 130
  }
});

const NavbarLoggedIn = () => {
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
            <SearchIcon color="primary" />
            <InputBase
              placeholder="Search for product and more"
              className={classes.inputBase}
            ></InputBase>
          </div>
          <ButtonGroup variant="text">
            <Button 
                startIcon={<PersonIcon color="default" />} 
                variant="contained"
                disableElevation
                color="secondary"
                className={classes.profileButton}
                >Profile</Button>
            <Button className={classes.roundedButton, classes.marginButtonGroup}>
              <ShoppingCartIcon color="secondary" />
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarLoggedIn;
