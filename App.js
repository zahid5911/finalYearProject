import "./App.css";
import NavBar from "./components/NavBar";
import FindJobs from "./components/FindJobs";
import Home from "./components/Home";
import Profile from "./Profile";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Setting from "./components/Setting";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      
      <Routes>
      <Route exact path="/FindJobs"Component={FindJobs}/>
      <Route exact path="/"Component={Home}/>
       <Route exact path="/Profile"Component={Profile}/>
       <Route exact path="/AboutUs"Component={AboutUs}/>

       <Route exact  path="/Login" element={<Login/>} />
  <Route exact path="/Signup" element={<SignUp/>} />
  <Route exact path="/Setting" element={<Setting/>} />
  </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
