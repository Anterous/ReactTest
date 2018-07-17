import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return(
      <div>
        <p>In a New component!</p>
        { 5 == 2 ? "yes" : "no!"}
      </div>
    );
  }
}
