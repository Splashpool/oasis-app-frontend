import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login.jsx";
import Menu from "./components/Menu/Menu";
import LocationListing from "./components/LocationListing";
import LocationDetails from "./components/LocationDetails";
import "fontsource-montserrat";
import Search from "./components/Search/Search.jsx";
import Filter from "./components/Filter";
import MapView from "./components/MapView";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHandHoldingWater } from "@fortawesome/free-solid-svg-icons";
import Copyright from "./components/Copyright/Copyright";

library.add(fab, faHandHoldingWater);

function App() {
  // const [locations, setlocation] = useState([
  //   {
  //     id: 1,
  //     name: "london",
  //     longitude: "51.5074",
  //     latitude: " 0.1278",
  //     status: "Drinkable",
  //   },
  //   {
  //     id: 2,
  //     name: "Santiago",
  //     longitude: "54.5074",
  //     latitude: " 7.1278",
  //     status: "Need traitment",
  //   },
  //   {
  //     id: 3,
  //     name: "Santiago",
  //     longitude: "94.5074",
  //     latitude: " 7.1278",
  //     status: "Drinkable",
  //   },
  //   {
  //     id: 4,
  //     name: "Santiago",
  //     longitude: "04.5074",
  //     latitude: " 7.1278",
  //     status: "Uknown",
  //   },
  // ]);

  return (
    <StylesProvider injectFirst>
      <Router>
        <div className="App">
          <Menu />
          <Container maxWidth="md">
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/locations">Locations</Link>
                  </li>
                  <li>
                    <Link to="/search">Search</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/location-details/:number">location-details</Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/locations">
                  <Filter />
                </Route>
                <Route path="/search" component={Search} />
                <Route path="/login" component={Login} />
                <Route
                  path="/location-details/:number"
                  component={LocationDetails}
                />
                <Route path="/" exact={true} component={Home} />
              </Switch>
            </div>
          </Container>
          <Copyright />
        </div>
      </Router>
    </StylesProvider>
  );
}

export default App;
