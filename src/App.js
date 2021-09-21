import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing'
import Order from './components/Order'
import Examples from './components/Examples'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route exact path="/examples">
            <Examples />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
