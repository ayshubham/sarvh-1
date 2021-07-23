import { Container } from '@material-ui/core';
import NavbarWithLogin from '../components/Navbar1';
import {useState} from 'react'
import NavbarLoggedIn from '../components/Navbar2';

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            {loggedIn ? <NavbarLoggedIn /> : <NavbarWithLogin />}
        </div>
    );
}
 
export default Home;