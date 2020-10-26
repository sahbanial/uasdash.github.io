import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Login from "./views/Login";
import PrivateRoute from "./containers/PrivateRoute";
import {ApolloProvider} from "react-apollo"
import client from "./configs/ApolloClient"
const AppRoute =() => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    
    <div>
    <Route exact path="/login" component={Login} />
    <PrivateRoute>
    {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </PrivateRoute>
     
    </div>
  </Router>
);

const App =()=> {
  return (<ApolloProvider client={client}>
    <AppRoute/>
  </ApolloProvider>)
  
}
export default App