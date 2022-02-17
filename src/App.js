import './App.css';
import Sidebar from './components/layout/Sidebar';
import Suggestions from './components/layout/Suggestions';
import {ContainerStyled} from '../src/components/styles/ContainerStyled'

function App() {
  return (
    <div className="App">
      <ContainerStyled>
        <Sidebar />
        <Suggestions />
      </ContainerStyled>
    </div>
  );
}

export default App;
