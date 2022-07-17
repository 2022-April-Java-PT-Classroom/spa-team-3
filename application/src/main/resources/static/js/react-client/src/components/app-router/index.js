import React from "react";
import {Route, Switch} from 'react-router-dom';
import HomeScreen from "../../pages/home-screen";
import AboutScreen from "../../pages/about";
import ContactScreen from "../../pages/contact-screen";
import Art from "../../pages/art";
import Nasa from "../../pages/nasa";
import Planet from '../../pages/planet/planet';

const AppRouter = () => {
    return (

        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/about'} component={AboutScreen} />
            <Route exact path={'/nasa'} component={Nasa} />
            <Route exact path={'/art'} component={Art} />
            <Route exact path={'/planets'} component={Planet} />
        </Switch>
        
    );
}

export default AppRouter;
