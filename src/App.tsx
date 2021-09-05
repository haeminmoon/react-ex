import { Redirect, Route, Switch } from 'react-router-dom';
import AppLayout from './components/AppLayout';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Switch>
        <AppLayout>
          <AppLayout.Main>
            <Route path="/home" component={Home} />
            <Redirect path="/" to="/home" exact />
          </AppLayout.Main>
        </AppLayout>
      </Switch>
    </>
  );
}

export default App;
