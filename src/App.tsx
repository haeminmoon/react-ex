import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect path="/" to="/home" exact />
      </Switch>
    </Router>
  );
}

export default App;
