import "./App.css";
import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import ThankYouPage from "./pages/ThankYou";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <HomePage />
      {/* <Router>
        <div>
          <Switch>
            <Route exact path="/thankyou" component={ThankYouPage} />
            </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
