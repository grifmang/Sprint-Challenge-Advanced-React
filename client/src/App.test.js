import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import TestRenderer from 'react-test-renderer';
import { render } from "@testing-library/react"
import DataCard from './components/DataCard';
import Buttons from "./components/Buttons";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('render app', () => {
  render(<App />);
});

test('render button component', () => {
  // const testApp = TestRenderer.create(<App />);
  // const testInstance = testApp.root;
  
  // expect(testInstance.findByType(Buttons)).toMatchSnapshot();
  const div = document.createElement('div');
  const buttonComponent = shallow(<Button />);
  ReactDOM.render(buttonComponent, div);
})

// test('render buttons', () => {
//   render(<Buttons />);
// })
