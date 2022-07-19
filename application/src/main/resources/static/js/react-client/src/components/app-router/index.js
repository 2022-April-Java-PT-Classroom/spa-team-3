import {Route, Switch} from 'react-router-dom';

import AboutScreen from "../../pages/about";
import AddPlanet from '../../pages/addPlanets/index'
import Art from "../../pages/art";
import ContactScreen from "../../pages/contact-screen";
import Create from "../../pages/create";
import Draw from "../../pages/draw";
import HomeScreen from "../../pages/home-screen";
import Nasa from "../../pages/nasa";
import Planet from '../../pages/planet/planet';
import React from "react";

const AppRouter = () => {
    return (

        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/about'} component={AboutScreen} />
            <Route exact path={'/nasa'} component={Nasa} />
            <Route exact path={'/art'} component={Art} />
            <Route exact path={'/create'} component={Create} />
            <Route exact path={'/draw'} component={Draw} />
            <Route path={'/planets'} component={Planet} />
            <Route path={'/add-planet'} component={AddPlanet} />
            <Route path={"/edit-planet/:id"} component={AddPlanet} />
        </Switch>
        
    );
}

export default AppRouter;
