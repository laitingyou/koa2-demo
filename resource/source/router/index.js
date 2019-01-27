import  React from "react";
import { BrowserRouter as Router, Route, Link, Switch, HashRouter  } from "react-router-dom";
import Home from '../components/home/Home'
const AppRouter = () => (
    <HashRouter>
        <div>
            <Route path="/" exact component={Home} />
        </div>
    </HashRouter>
);

export default AppRouter;