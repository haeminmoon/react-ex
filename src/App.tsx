import { Redirect, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';
import AppLayout from './components/AppLayout';

const Home = loadable(() => import('./pages/Home'));
const Live = loadable(() => import('./pages/Live'));

function App() {
  return (
    <AppLayout>
      <AppLayout.Main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/live" component={Live} />
          <Redirect from="/" to="/home" />
        </Switch>
      </AppLayout.Main>
    </AppLayout>
  );
}

export default App;
