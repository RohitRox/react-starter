global.React = require('react');
global.ReactDOM = require('react-dom');

const Adapter = require('enzyme-adapter-react-16');
const Enzyme = require('enzyme');
Enzyme.configure({ adapter: new Adapter() });
global.Enzyme = Enzyme;
