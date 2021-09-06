import { Redirect, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';
import AppLayout from './components/AppLayout';

const Home = loadable(() => import('./pages/Home'));
const Live = loadable(() => import('./pages/Live'));
const Rank = loadable(() => import('./pages/Rank'));
const My = loadable(() => import('./pages/My'));

function App() {
  return (
    <AppLayout>
      <AppLayout.Main>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/live" component={Live} />
          <Route exact path="/rank" component={Rank} />
          <Route exact path="/my" component={My} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Redirect exact path="*" to="/" />
        </Switch>
      </AppLayout.Main>
    </AppLayout>
  );
}

export default App;
