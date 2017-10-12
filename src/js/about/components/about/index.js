import React, { Component } from 'react';
import 'base/form.scss';

import './style.scss';

export default class Home extends Component {
  render() {
    return (
      <div className='container about'>
        <h1 className='header'>About this project</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <h3 className='header'>Envanti Silo</h3>
        <ul className='about-list'>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Etiam quis leo eleifend neque.</li>
          <li>Vestibulum auctor metus consequat dapibus neque.</li>
          <li>Duis tempus tristique turpis in neque.</li>
        </ul>
        <hr />
        <br />
        <div>
          <form className='form-horz'>
            <input type='text' placeholder='We love feedback' />
            <button>GO</button>
          </form>
        </div>
        <br />
        <a href='index.html' className='btn'>Go Back</a>
      </div>
    );
  }
}
