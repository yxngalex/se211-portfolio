import './App.scss';
import NavBar from "./components/navbar/navbar.component";
import {Switch,  Route} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/experience' />
          <Route path='/projects' />
          <Route path='/contact' />
      </Switch>
    </div>
  );
}

export default App;
