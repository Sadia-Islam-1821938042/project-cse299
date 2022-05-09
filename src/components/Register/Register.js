import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { user, signInUsingGoogle } = useAuth();
    return (
        <form className="register-form p-4">
            <h2 className="my-4 text-center text-success">Create an account</h2>
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
                            <div className="text-center me-3">
                                <Link to="/login">
                                    Already a user?
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
                <button type="submit" style={{ marginLeft: "30%" }} className="btn d-block btn-success">Register</button>
                <button onClick={signInUsingGoogle} style={{ marginLeft: "30%" }} className="btn d-block btn-primary"> <span className="me-2"><i className="fab fa-google"></i></span> Google Sign In</button>
            </div>
        </form>
    );
};

export default Register;