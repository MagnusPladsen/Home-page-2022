import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import ContactForm from './Components/ContactForm';
import Demo from './Components/Demo';



function App() {

  const [theme, setTheme] = useState('dark');
  const darkIcon = <a href="#" onClick={toggleTheme}><i className="fa-solid fa-sun fa-xl nav-icon" id="theme-icon"></i></a>;
  const lightIcon = <a href="" onClick={toggleTheme}><i className="fa-solid fa-moon fa-xl nav-icon" id="theme-icon"></i></a>;

  function toggleTheme(e) {
      e.preventDefault();
      if (theme === 'dark') {
          setTheme('light');
      } else {
          setTheme('dark');
      }
  };

  const themeIcon = () => {
      if (theme === 'dark') {
          return lightIcon;
      } else {
          return darkIcon;
      }
  }

  return (
    <div className="App"  data-theme={theme}>
      <Router>
        <Navigation themeIcon={themeIcon}/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
