
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarMenu from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
