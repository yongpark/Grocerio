import React from 'react';
import { Link, withRouter } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {lightBlue300} from 'material-ui/styles/colors';
import {grey300} from 'material-ui/styles/colors';
injectTapEventPlugin();

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: 'login'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleFormType = this.handleToggleFormType.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.state.formType === 'login' ? this.props.login({user}) : this.props.signup({user});
  }

  handleToggleFormType(e) {
    e.preventDefault();
    this.setState({
      formType: this.state.formType === 'login'
        ? 'signup' : 'login'
    });
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user ={
      username: 'guest',
      password: 'password'
    };
    this.props.login({user});
    this.props.closeAuthModal('login');
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render(){
    let buttonName,
        linkText,
        guestLogin;
    if (this.state.formType === "login"){
      buttonName = "Log In";
      linkText = "Sign Up";
      guestLogin = (<FlatButton label='Guest Login' secondary={true} onClick={this.handleGuestLogin} labelStyle={{fontWeight: 400}}/>);
    }
    else {
      buttonName = "Sign Up";
      linkText = "Log In";
      guestLogin = (<FlatButton label='Guest Login' secondary={true} onClick={this.handleGuestLogin} labelStyle={{fontWeight: 400}}/>);
    }
    return(
      <section>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog open={this.props.authModalOpen} onRequestClose={this.props.closeAuthModal} modal={false} title={buttonName} bodyStyle={{color: lightBlue300}} className="form" titleStyle={{fontWeight: 300, color: lightBlue300}}>
            <form onSubmit={this.handleSubmit}>
              <TextField type="text" floatingLabelText="Username" errorText={this.props.errors.username === undefined ? "" : "Username is required"} value={this.state.username}  onChange={this.update("username")} fullWidth={true}
                inputStyle={{color: lightBlue300, }}
                floatingLabelStyle={{color: lightBlue300}}
                floatingLabelFocusStyle={{color: lightBlue300}}
                hintStyle={{color: grey300}}/>
              <br/>
              <TextField type="password" hintText="Password" floatingLabelText="Password" value={this.state.password} onChange={this.update("password")} fullWidth={true} errorText={this.props.errors.password === undefined ? "" : "Password is required"}
                inputStyle={{color: lightBlue300, }}
                floatingLabelStyle={{color: lightBlue300}}
                floatingLabelFocusStyle={{color: lightBlue300}}
                hintStyle={{color: grey300}}/>
              <br/>
              <FlatButton label="Submit" type="submit" primary={true} labelStyle={{fontWeight: 300}}/>
            </form>
            <section>
              {guestLogin}
              <FlatButton label={linkText} secondary={true} onTouchTap={this.handleToggleFormType} labelStyle={{fontWeight: 400}}/>
            </section>
          </Dialog>
        </MuiThemeProvider>
      </section>
    )
  }
}

export default SessionForm;
