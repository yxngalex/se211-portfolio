import './App.scss';
import NavBar from "./components/navbar/navbar.component";
import {Switch,  Route} from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
          <Route exact path='/'/>
      </Switch>
    </div>
  );
}

export default App;
