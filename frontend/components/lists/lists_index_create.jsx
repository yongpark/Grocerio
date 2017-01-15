import React from 'react';
import ToggleMenu from '../general/toggle_menu';
import ListCreateFormContainer from './list_create_form_container';

class ListsIndexCreate extends ToggleMenu{
  render(){
    const menuContent = (
      <ListCreateFormContainer
        show={ this.props.show }
        toggle={ this.props.toggle }/>
    );

    return(
      <li className="list-create">
        <section onClick={this.toggle}>
          Create new list...
        </section>
        {this.renderMenu('Create', menuContent, "list-create-menu")}
      </li>
    );
  }
}

export default ListsIndexCreate;
