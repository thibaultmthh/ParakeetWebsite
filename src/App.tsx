import React from 'react';
import "./css/main.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import firebaseNP from "firebase";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Buy from "./pages/Buy";
import initFirebase from "./firebaseInit";

const firebase = initFirebase();

const auth = firebase.auth();
// const firestore = firebase.firestore();

let token = "";
try {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  token = urlParams.get('token') || "";
} catch (e) {
  console.log(e);
}
if (token) {
  auth.signInWithCustomToken(token);
}
class App extends React.Component<{}, {user: firebaseNP.User | null}> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      console.log(user);

      this.setState({ user });
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/dashboard">
              {user ? <Dashboard user={user} /> : <Login />}

            </Route>

            <Route path="/login">
              {user ? <Dashboard user={user} /> : <Login />}

            </Route>

            <Route path="/buy">
              {user ? <Buy /> : <Login />}

            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
