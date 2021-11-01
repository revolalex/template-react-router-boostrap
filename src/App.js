
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavbarMenu from './Components/Navbar/Basic/Navbar';
// import FullScreenMenu from './Components/Navbar/FullScreenMenu';
import HamburgerMenu from './Components/Navbar/Hamburger/HamburgerMenu';
import Home from './Pages/Home/Home';
import Add from './Pages/Add/Add';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog'
import Edit from './Pages/Edit/Edit'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <FullScreenMenu/> */}
        <ToastContainer/>
        <HamburgerMenu/>
        {/* <NavbarMenu /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/edit" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
