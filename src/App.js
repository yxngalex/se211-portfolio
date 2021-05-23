import "./App.scss";
import NavBar from "./components/navbar/navbar.component";
import {Switch, Route} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import WorkPage from "./pages/workpage/workpage.component";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/works" component={WorkPage}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
