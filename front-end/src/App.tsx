import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from "./components/Structure/Navbar";
import About from "./components/Pages/About";
import Skills from "./components/Pages/Skills";
import Projects from "./components/Pages/Projects";
import Cv from "./components/Pages/Cv";
import Footer from "./components/Structure/Footer";
import Home from "./components/Pages/Home";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="App flex">
        <nav className=" flex-auto w-72 navbar  h-screen fixed">
          <Navbar />
        </nav>
        <div className="flex-auto ml-72 flex-col">
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/admin-dashboard" element={<Admin />} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
