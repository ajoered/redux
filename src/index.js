import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBoepjixgBmT19gd4-aTjetHd8PpJiInss';

// Create a new component.
// This component should produce HTML.

const App = () => {
  return <div>Hi!</div>;
}


// Take this component's generated HTML and put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
