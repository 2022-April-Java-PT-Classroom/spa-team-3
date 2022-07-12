import React from "react";
import {Route, Switch} from 'react-router-dom';
import HomeScreen from "../../pages/home-screen";
import ContactScreen from "../../pages/contact-screen";
import About from "../../pages/about";
import Art from "../../pages/art";
import Nasa from "../../pages/nasa";

const AppRouter = () => {
    return (

        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/nasa'} component={Nasa} />
            <Route exact path={'/art'} component={Art} />
        </Switch>
        
    );
}

export default AppRouter;