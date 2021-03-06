import React from 'react';
import { hashHistory, Link } from 'react-router';
import SplashSessionButtonContainer from './splash_session_form/splash_session_button_container';
import SplashSessionFormContainer from './splash_session_form/splash_session_form_container';

class Splash extends React.Component{
  render(){
    return(
      <div>
        <div className="home">
          <div className="main-text">
            Grocerio is a smart grocery list that saves you money
          </div>
          <div className="main-description">
            Grocerio is a smart to-do list that recommends delicious meals before grocery items expire, saving you money and helping you discover tasty new recipes!
          </div>
          <SplashSessionButtonContainer/>
          <SplashSessionFormContainer/>
        </div>
      </div>
    );
  }
}

export default Splash;
