import './App.scss';
import NavBar from "./components/navbar/navbar.component";
import {Switch,  Route} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Experience from "./pages/experience/experience.component";
import ProjectsPage from "./pages/projects/projects.component";
import Contact from "./pages/contact/contact.component";
import About from "./components/about/about.component";

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
