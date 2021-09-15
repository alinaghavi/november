//Components
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Header from "src/components/Header";
import Account from "src/pages/Account";
import Login from "src/pages/Login";
import Logout from "src/pages/Logout";
import Home from "src/pages/Home";

//Others
import { UserContext, initialUser } from "src/store/context";
import "src/App.scss";

function App() {
  const [user, setUser] = useState(initialUser); //Global state of the user

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={[user, setUser]}>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <ProtectedRoute path="/account" component={Account} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
