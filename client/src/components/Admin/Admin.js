import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Admin extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1">
                        <h2 className="text-center">Admin</h2>
                        <h5 className="text-center">Welcome {this.props.auth.username}</h5>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps({ auth }) {
        return { auth };
}

export default connect(mapStateToProps, actions)(Admin);