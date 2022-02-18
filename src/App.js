import './App.css';

import {ContainerStyled} from '../src/components/styles/ContainerStyled'

import { Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    <div className="App">
      <ContainerStyled>
        <Switch>
          <Route path="/" exact>
            <Homepage></Homepage>
          </Route>
          <Route path="/roadmap">
            <Roadmap></Roadmap>
          </Route>
        </Switch>
      </ContainerStyled>
    </div>
  );
}

export default App;
