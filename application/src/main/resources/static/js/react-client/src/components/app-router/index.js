import React from "react";
import {Route, Switch} from 'react-router-dom';
import ContactScreen from "../../pages/contact-screen";
import HomeScreen from "../../pages/home-screen";

const AppRouter = () => {
    return (

        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
        </Switch>
        
    );
}

export default AppRouter;