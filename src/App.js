import React from 'react';
// import logo from './logo.ssvg';
import './App.css';
import Footer from './Footer/footer';
import Blog from './Blogs/blogPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Blog />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
