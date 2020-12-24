import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_action';
import { SimpleFooter } from '../_components';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.logout();
        this.state = {
            user: {
                email: '',
                password: ''
            },
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });

        const { user } = this.state;
        if (user.email !== '' && user.password !== '') {
            this.props.login(user);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { user, submitted } = this.state;
        return (
          <div className="logged-in env-production page-responsive session-authentication height-100">
              
              <div className="application-main pt-6" data-commit-hovercards-enabled="" data-discussion-hovercards-enabled=""
                   data-issue-and-pr-hovercards-enabled="">
                  <main id="js-pjax-container" data-pjax-container="">
                      <div className="auth-form px-3" id="login">
                          <form onSubmit={this.handleSubmit}>
                              <div className="auth-form-header p-0">
                                  <h1>请使用邮箱密码登录</h1>
                              </div>
                              
                              <div className="auth-form-body mt-3">
                                  <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                                      <label htmlFor="email">邮箱</label>
                                      <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                                      {submitted && !user.email &&
                                      <div className="help-block">邮箱不能为空</div>
                                      }
                                  </div>
                                  <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                      <label htmlFor="password">密码</label>
                                      <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                      {submitted && !user.password &&
                                      <div className="help-block">密码不能为空</div>
                                      }
                                  </div>
                                  
                                  <input type="submit" name="commit" value="登录"
                                         tabIndex="3"
                                         className="btn btn-primary btn-block"
                                         data-disable-with="Signing in…"/>
                                  {loggingIn &&
                                  <div className="container clearfix width-full text-center mt-3">
                                      <img alt=''
                                           src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                                  </div>
                                  }
                              </div>
                          </form>
                      </div>

                  </main>
              </div>

              <SimpleFooter/>
          </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };