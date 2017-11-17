import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import 'home.scss';

import Home from './components/home';
import TodoStore from '../store/todo';

const stores = {todoStore: TodoStore};

ReactDOM.render(
  <Provider {...stores}>
    <Home />
  </Provider>,
  document.getElementById('app'),
);
