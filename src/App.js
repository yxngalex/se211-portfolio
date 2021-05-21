import "./App.scss";
import NavBar from "./components/navbar/navbar.component";
import {Switch, Route} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
// import Experience from "./pages/about/about.component";
// import ProjectsPage from "./pages/works/works.component";
// import Contact from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component";
import React from "react";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                {/*<Route exact path="/about" component={Experience}/>*/}
                {/*<Route exact path="/works" component={ProjectsPage}/>*/}
                {/*<Route exact path="/contact" component={Contact}/>*/}
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
