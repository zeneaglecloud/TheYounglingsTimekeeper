import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { clock } from '../../store/actions/clockActions';

class Timesheet extends Component {

    state = {
        clockIn : {
            in: moment(clock.createdAt).calendar(),
        },
        clockOut : {
            out: moment(clock.createdAt).calendar()
        }
    }


    startSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.clock(this.state.clockIn);
    }

    endSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.clock(this.state.clockOut);
    }
    render() {

        setTimeout (() => {
            this.props.clock(this.state.clockOut);
        },28800000)
        return (
                <div>
                    <form onSubmit={this.startSubmit} className="white">
                      <h5 className="grey-text text-darken-3">CLock In Your Time</h5>
                       <p>{moment().format('MMMM Do YYYY, h:mm a')}</p>
                        <div className="input-field">
                            <button id="clockIn" className="btn pink lighten-1 z-depth-0">Clock-In</button>
                        </div>
                        </form>

                        <form onSubmit={this.endSubmit} className="white">
                         <h5 className="grey-text text-darken-3">CLock Out Your Time</h5>
                         <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <div className="input-field">
                            <button id="clockOut" className="btn pink lighten-1 z-depth-0">Clock-Out</button>
                        </div>
                        </form>
                    </div>    
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clock: (time) => dispatch(clock(time)),
        }
    }

export default connect(null, mapDispatchToProps)(Timesheet);