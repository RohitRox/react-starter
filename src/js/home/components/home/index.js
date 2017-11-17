import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import 'base/base.scss';
import 'base/buttons.scss';
import './style.scss';

@inject('todoStore')
@observer
export default class Home extends Component {
  addTodo = () => {
    this.props.todoStore.addTodo('One more .....');
  }

  renderTodos() {
    return this.props.todoStore.getTodos().map((todo) => <b key={todo}>{todo}</b>);
  }

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

        <h3>TODO</h3>
        {  this.renderTodos() }
        <button onClick={this.addTodo}>ADD Todo</button>
        {  this.props.todoStore.count }
        <br />
        <br />
        <a href='about.html' className='btn'>About</a>
      </div>
    );
  }
}
