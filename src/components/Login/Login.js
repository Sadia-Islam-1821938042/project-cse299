import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    // const { signInUsingGoogle } = useAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/';

    // const handleGoogleLogIn = () => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             history.push(redirect_uri);
    //         })
    // }

    return (
        <div className="login-container">
            <div className="login-item">
                <button className="btn btn-outline-primary mt-5"><i className="pe-2 fab fa-google"></i><h6 style={{ display: "inline" }}>Google Sign in</h6></button>
            </div>
        </div>
    );
};

export default Login;