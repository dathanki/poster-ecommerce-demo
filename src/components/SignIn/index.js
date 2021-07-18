import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Buttons from '../Forms/Button';
import './styles.scss';
import { signInWithGoogle, auth } from './../../firebase/utils';


import AuthWrapper from '../AuthWrapper';
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';


const initialState = {
    email: '',
    password: ''
};

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });

        } catch (err) {
            // console.log(err);
        }
    }

    render() {
        const { email, password } = this.state;

        const configAuthWrapper = {
            headline: 'LogIn'
        };




        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                    <form onSubmit={this.handleSubmit} >

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange={this.handleChange}
                        />

                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            handleChange={this.handleChange}
                        />

                        <Buttons type="submit" >
                            LogIn
                        </Buttons>
                        <div className="socialSignIn">
                            <div className="row">
                                <Buttons onClick={signInWithGoogle} >
                                    Sign in with Google
                                </Buttons>
                            </div>
                            <div className="links">
                                <Link to="/Recovery" >
                                    Reset Password
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </AuthWrapper>
        );
    }
}


export default SignIn;