import React from "react";
import {Route, Switch} from 'react-router-dom';
import AboutScreen from "../../pages/about";
import ContactScreen from "../../pages/contact-screen";
import HomeScreen from "../../pages/home-screen";

const AppRouter = () => {
    return (

        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/about'} component={AboutScreen} />
        </Switch>
        
    );
}

export default AppRouter;