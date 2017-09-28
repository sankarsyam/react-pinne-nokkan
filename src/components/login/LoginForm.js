import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import '../../assets/stylesheets/loginForm.scss';
import { login } from '../../actions/login';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ' ',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.context.dispatch(login(email, password));
    this.setState({ email: '', password: '' });
  }

  validateForm() {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  }

  renderError() {
    if (this.props.context.error) {
      return (
        <div className="error">
          {this.props.context.error}
        </div>
      );
    }
  }

  render() {
    return (
      <Card className="login-card">
        <div className="login-title">Login</div>
        <CardText>
          {this.renderError()}
          <TextField
            id="email"
            label="Email"
            placeholder="example@example.com"
            type="email"
            onChange={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextField
            id="password"
            label="Password"
            placeholder="••••••••••••"
            type="password"
            onChange={password => this.setState({ password })}
            value={this.state.password}
          />
          <div>
            <Button
              id="submit-button"
              disabled={!this.validateForm()}
              label="Log In"
              raised
              primary
              type="submit"
              onClick={this.onSubmit}
            />
          </div>
        </CardText>
      </Card>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.string,
  context: PropTypes.object,
};
