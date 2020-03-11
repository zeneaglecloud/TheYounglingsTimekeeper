import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',        
        idNumber: '',
        phoneNumber: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange} />
                        </div>                       
                        <div className="input-field">
                            <label htmlFor="idNumber">ID Number</label>
                            <input type="text" id="idNumber" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" id="phoneNumber" onChange={this.handleChange} />
                        </div>
                        <br/>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Signup</button>
                        </div>
                        </form>
                </div>
            </div>
        )
    }
}

export default SignUp;
