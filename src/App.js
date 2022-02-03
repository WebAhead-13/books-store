import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home/index";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/Store" component={Store} />
        <Route path="/storeAdmin" component={storeAdmin} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route
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
