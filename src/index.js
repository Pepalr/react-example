import React from 'react';
import ReactDOM from 'react-dom';


import Menu from './Components/Menu';
import Header from './Components/Header';
import Image from './Components/Image';
import Routes from './routes';


const App = () => <div><Header /><Menu /><Routes /></div>;

ReactDOM.render(<App />, document.getElementById('app'));