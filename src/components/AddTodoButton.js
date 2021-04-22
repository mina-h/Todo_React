import React from 'react';

const { Component } = React;

class AddToDoButton extends Component {
  render() {
    return (
     <button className="add" type="button" onClick={this.props.onClick}>Add</button>
    );
  }
}

export default AddToDoButton;
