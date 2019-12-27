import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Password"
                        required
                        handleChange={this.handleChange}
                    />

                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;