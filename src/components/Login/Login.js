import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { user, logOut, signInUsingGoogle } = useAuth();
    return (
        <form className="login-form p-4 mb-5">
            <h2 style={{ color: "#087979" }} className="my-4 text-center">Please Login</h2>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input type="email" placeholder="Your Email" className="form-control" id="inputEmail" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input type="password" placeholder="Your Password" className="form-control" id="inputPassword" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <div className="form-check">
                            <div className="me-3 text-center">
                                <Link to="/register">
                                    Create an account
                                </Link>
                            </div>
                            <div>
                                {
                                    <h4 className="text-danger"></h4>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" style={{ backgroundColor: "#087979", marginLeft: "30%" }} className="btn d-block text-white">Sign in</button>
                <button onClick={signInUsingGoogle} style={{ marginLeft: "30%" }} className="btn d-block btn-primary"> <span className="me-2"><i className="fab fa-google"></i></span> Google Sign In</button>
            </div>
        </form>
    );
};

export default Login;