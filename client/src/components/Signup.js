import React from 'react'
import styles from './Signup.css';
import Signupimg from "../Images/Signupimg.jpg"
import Login from "./Login"

function Signup(props) {
    return (
        <div>
            <div className="main">
                <div className="imgbg">
                    <img src={Signupimg} alt="" className="imghere" />
                </div>
                <div className="mainlog">
                    <div className="btnup">
                        <button className="singup" onClick={()=>{
                            props.history.push('/login')
                        }}>LOGIN</button>
                        <button className="login">SIGN UP</button>
                    </div>
                    <div className="textone">SIGN UP TO CONTINUE</div>
                    <div className="inputbox">
                        <input type="text" placeholder="USERNAME" className="input_username"/>
                        <input type="email" placeholder="EMAIL ADDRESS" className="input_username"/>
                        <input type="password" placeholder="PASSWORD" className="input_username"/>
                        <input type="password" placeholder="CONFIRM PASSWORD" className="input_username"/>
                       
                    </div>

                    <div className="mainbtn">
                        <button className="logintwo">SIGN UP</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Signup
