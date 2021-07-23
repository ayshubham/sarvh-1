import React from 'react'
import styles from "../components/Login.css"
import Loginimg from "../Images/Loginimg.jpg"
import Signup from './Signup'
import {Link} from 'react-router-dom'

function Login(props) {
    return (
        <div>
            <div className="main"  id="left-sidebar">
                <div className="imgbg">
                    <img src={Loginimg} alt="" className="imghere" />
                </div>
                <div className="mainlog">
                    <div className="btnup">
                       
                        <button className="singup" >LOGIN</button>
                     
                        <button className="Login" onClick={()=>{
                            props.history.push('/signup')
                        }}>SIGN UP</button>
                        
                    </div>
                    <div className="textone">LOGIN TO CONTINUE</div>
                    <div className="inputbox">
                        <input type="text" placeholder="USERNAME OR EMAIL ADDRESS" className="input_username"/>
                        <input type="password" placeholder="PASSWORD" className="input_username"/>
                        <div className="forget"> <a href="" className="first">Forgot Password?</a> </div>
                    </div>

                    <div className="mainbtn">
                        <button className="logintwo" onClick={()=>{
                            props.history.push('/signup')
                        }}>LOGIN</button>
                       
                        <button className="facebook">FACEBOOK</button>
                        <button className="google">GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
