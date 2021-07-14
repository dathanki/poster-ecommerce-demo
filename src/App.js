import React from 'react';
import { Switch, Route } from 'react-router-dom';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';


import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import './default.scss';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact={true} path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path="/Registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
        </Switch>
    </div>
  );
}

export default App;
