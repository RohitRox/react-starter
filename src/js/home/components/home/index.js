import React, { Component } from 'react';

import 'base/base.scss';
import 'base/buttons.scss';
import './style.scss';

export default class Home extends Component {
  render() {
    return (
      <div className='container home'>
        <h1 className='header'>Hello React from Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <hr />
        <br />
        <a href='about.html' className='btn'>About</a>
      </div>
    );
  }
}
