import React from "react";
import { Route, Switch} from "react-router-dom";
import './App.css';
import Card from "./Components/Card.jsx";

function App() {

  return (
    <Switch>
    <Route path="/" component={Card} />
    </Switch>
  );
}

export default App;