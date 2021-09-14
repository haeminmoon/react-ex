import './@fake-db';

import { Redirect, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';
import AppLayout from './layouts/AppLayout';
import Auth from './hoc/auth';

const Home = loadable(() => import('./pages/Home'));
const Live = loadable(() => import('./pages/Live'));
const Rank = loadable(() => import('./pages/Rank'));
const My = loadable(() => import('./pages/My'));
const Login = loadable(() => import('./pages/Login'));
const Loggedin = loadable(() => import('./pages/Loggedin'));

function App() {
  return (
    <AppLayout>
      <AppLayout.Main>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/live" component={Live} />
          <Route exact path="/rank" component={Rank} />
          <Route exact path="/my" component={My} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/loggedin" component={Auth(Loggedin, true)} />
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
