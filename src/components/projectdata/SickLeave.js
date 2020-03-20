import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addSickLeave } from '../../store/actions/projectActions';

class SickLeave extends Component {
    state = {
        startDate: '',
        edor: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addSickLeave(this.state);
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Apply for Sick Leave [Form]</h5>
                        <div className="input-field">
                            <label htmlFor="startDate">Start Date</label>
                            <input type="text" id="startDate" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="edor">Expected Date of Return</label>
                            <input type="text" id="edor" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Apply for Sick Leave</button>
                        </div>
                        </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    } 
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSickLeave: (project) => dispatch(addSickLeave(project))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(SickLeave);