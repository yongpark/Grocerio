import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Paper from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardTitle} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class Recipe extends Component{
  componentDidMount(){
    this.props.fetchList(this.props.listId)
    .then(() => this.props.fetchColumns(this.props.listId));
  }

  nearExpiration(){

  }

  render(){
    // if (this.props.columns.title == "To Buy" || this.props.columns.title == "Bought"){
    //   console.log("true");
    // }
    for (var i = 0; i < this.props.columns.length; i++) {
      if (this.props.columns[i].title == "To Buy" || this.props.columns[i].title == "Bought"){
        console.log("true");
      }
    }
    return(
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card className='recipe'>
            <CardTitle title="Recommended Recipes"/>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Recipe;