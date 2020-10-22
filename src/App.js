import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import TopBar from './components/TopBar';
import Home from './views/Home';

import './App.css';
import Statistics from './views/Statistics';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <TopBar />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route
                            exact
                            path="/stats"
                            component={Statistics}
                        ></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
