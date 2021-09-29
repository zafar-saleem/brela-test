import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Agenda from './pages/agenda';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'><Agenda /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
