import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends Component {
  render() {
    const path = this.props.location.pathname;
    if (
      path !== '/user/login' &&
      path !== '/user/signup' &&
      path !== '/user/change_password' &&
      path !== '/user/recovery' &&
      path !== '/user/verify' &&
      path.substring(0, 6) !== '/admin'
    ) {
      return (
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  <a href="https://github.com/hutchgrant/react-boilerplate">
                    <span
                      className="btn btn-github"
                      style={{ padding: '2px 4px' }}
                    >
                      <i
                        className="fa fa-github"
                        style={{ fontSize: '20px' }}
                      />
                    </span>
                    &nbsp;React Boilerplate&nbsp;
                  </a>released under the MIT License
                </p>
              </div>
            </div>
          </div>
          <div className="footer-tertiary" />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default withRouter(Footer);
