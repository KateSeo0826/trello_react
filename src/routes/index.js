import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";
import Home from "../components/Home";
const AppRouter = () => {
    return (

        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:boardID" component={TrelloBoard} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
