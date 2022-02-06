// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home/index";
import Login from "./pages/login/index";
import Store from "./pages/Store/index";

function App() {
  const [user, setUser] = React.useState(localStorage.getItem("email"));
  const [pass, setPass] = React.useState(localStorage.getItem("password"));

  React.useEffect(() => {
    if (user) {
      localStorage.setItem("email", user);
      localStorage.setItem("password", pass);
    }
  }, [user, pass]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />

        <Route
          exact
          path="/login"
          element={
            <Login
              user={user}
              setUser={setUser}
              pass={pass}
              setPass={setPass}
            />
          }
        />
        {/* <Route path="/signup" component={SignUp} /> */}
        {/* <Route
          path="/cart"
          component={() => (
            <Cart items={JSON.parse(localStorage.getItem("selectedItems"))} />
          )}
        />
        <Route Component={NotFoundPage} />
        <Redirect to="/404" /> */}
      </Routes>
    </Router>
  );
}

export default App;
