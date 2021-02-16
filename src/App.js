import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Interview";
import All from "./Components/Info_metier";
import Ajout from "./Components/Metier_proches"

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: "20px" }} id="menu">
          <Link
            to="/Components/Interview"
            style={{
              marginBottom: "100%",
              tesxtDecoration: "none",
              fontFamily: "SHOWCARD GOTHIC ",
              float: "left",
              color: "black",
              fontSize: "30px",
            }}
          >
            Atouts
            METIERS
          </Link>
          <Link
            to="/Components/Info_metier"
            className="link"
            style={{
              fontSize: "px",
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            <span className="wourd">Info_metier</span>
          </Link>
          <Link
            to="/Components/Metier_proches"
            className="link"
            style={{
              fontSize: "px",
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            <span className="wourd">Metier_proche</span>
          </Link>
          <Link
            to="/Components/Interview"
            className="link"
            style={{
              fontSize: "",
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            <span className="wourd">Interview</span>
          </Link>
        </div>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/Components/Interview" component={Home} />
          <Route exact path="/Components/Info_metier" component={All} />
          <Route path="/Components/Metier_proches" component={Ajout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
