import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer/Footer';
import CoreMembers from './HomePage/coreMemberCards'
import Team from './HomePage/team'


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<CoreMembers />, document.getElementById('heads'));
ReactDOM.render(<Team />, document.getElementById('ourTeam'));

// ReactDOM.render(<Button />, document.getElementById('Member-Button'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
