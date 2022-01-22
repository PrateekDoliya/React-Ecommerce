import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import AdminLogin from './AdminLogin';
import ErrorPage from './ErrorPage';
import Signup from './Signup';
import SignIn from './SignIn';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
// import Cart from './Cart';

const App = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    {
      location.pathname === '/' || location.pathname === '/product' ||location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/admin' ? 
      <div>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={ toggle } />
      </div>
      :
      null
    }
  
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/product" component={ Products } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/admin" component={ AdminLogin } />
        <Route exact path="/signIn" component={ SignIn } />
        <Route exact path="/signUp" component={ Signup } />
        {/* <Route exact path="/cart" component={ Cart } /> */}
        <Route component={ ErrorPage } />
      </Switch>
    </>
  )
}

export default App;
