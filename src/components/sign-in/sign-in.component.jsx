import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    submitHandler = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }
    changeHandler = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <FormInput name="email" type="email" label='Email' 
                    value={this.state.email} changeHandler={this.changeHandler} required/>
                    
                    <FormInput name="password" type="password" label='Password' 
                    value={this.state.password} changeHandler={this.changeHandler} required/>
                    
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;