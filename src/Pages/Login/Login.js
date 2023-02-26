import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import LoginImg from "../../Images/login.svg";
import Avatar from "../../Images/avatar.svg";
import "./login.css";
import Google from "../../Images/Icons/google.png";

const Login = () => {
    // const {signinUsingGoogle} = useAuth();
    const { signinUsingGoogle } = useAuth();
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation();
    const navigate = useNavigate();

    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signinUsingGoogle()
            .then(result => {
                const user = result.user;
                // setUser(user);
                navigate(redirect_url)

            })
            .catch((error) => {
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className=' login-container mx-auto '>
            <div className='d-xl-flex gap-4'>
                <div className='my-auto'>

                    <img className='LoginImg' src={LoginImg} alt="Login" />
                </div>
                <br />
                <div className="login-content">
                    <form >
                        <div className='d-flex justify-content-center'>
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="">
                                <input type="text" className="input" placeholder='Username' />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input type="password"
                                    placeholder='Password' className="input" />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" className="btn" value="Login"></input>
                        <div className='d-flex gap-3' style={{ cursor: "pointer" }} onClick={handleGoogleLogin}>
                            <img style={{ width: "30px", height: "30px", }} src={Google} alt="" />
                            <h5>Login With google</h5>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;