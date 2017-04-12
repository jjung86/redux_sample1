import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './samples/Home';
import Hello from './samples/Hello';
import Greeting from './samples/Greeting';
import './App.css';

class App extends Component {
  render() {
    const routes = [
      {
        path: '/',
        exact: true,
        sidebar: () => <div>home</div>,
        main: () => <Home/>
      },
      {
        path: '/greeting',
        sidebar: () => <div>greeting</div>,
        main: () => <Greeting/>
      },
      {
        path: '/hello',
        sidebar: () => <div>hello</div>,
        main: () => <Hello/>
      }
    ];
    return (
      <Router>
        <div className="App">
          {/*Side Bar*/}
          <div className="side-bar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Greeting">Greeting</Link></li>
              <li><Link to="/Hello">Hello</Link></li>
            </ul>
          </div>
          {/*Contents*/}
          <div className="contents">
            {routes.map((route, index) => {
              return (<Route key={index} path={route.path} exact={route.exact} component={route.main} />)
            })}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
