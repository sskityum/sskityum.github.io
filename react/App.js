import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home } from './pages/Home';
import {Galery} from './pages/Galery';
import { Todo } from './pages/Todo';
import {FunnyPictures} from './pages/FunnyPictures'
import { Navbar } from './components/navbar/Navbar';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/galery'} component={Galery} />
              <Route path={'/todo'} component={Todo} />
              <Route path={'/funnyPictures'} component={FunnyPictures} />
            </Switch>      
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
