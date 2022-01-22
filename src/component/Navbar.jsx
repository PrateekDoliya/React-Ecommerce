import React from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import { FiLogIn } from 'react-icons/fi';
import { Nav, LogoContainer, NavMenu, NavLink, Bars,NavLogin, Logger, MobLoginContainer, LogoutContainer, LogoutContainer1, BarLogoContainer} from './NavbarElements';
// import SignIn from './SignIn';
import { useHistory } from 'react-router';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { LoginAction } from './action/Login';
// import Cart from './Cart';


const Navbar = ({ toggle }) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const initialState = useSelector( state => state.LoginReducer);
  
  const ren = () => {
    // ReactDOM.render(<SignIn />,document.getElementById('root'))
    history.push('/signIn');
  }

  const logout = () => {
    $("#logoutContainer1").slideToggle();
    
  }
  const logout1 = () => {
    $("#logoutContainer").slideToggle();
    
  }

  const logOutID = () => {
    dispatch(LoginAction({name:null}))
  }



    return (
        <>
            <div className="container">
                <Nav>
                    <LogoContainer>
                    <BarLogoContainer>
                      <Bars onClick={ toggle } />
                      <NavLink exact to="/" style={{fontWeight:'bolder',fontSize:'35px'}} id="Logo"><b><span style={{fontFamily:'EB Garamond, serif', color:'black'}}>MY</span><span className="text-danger" style={{fontFamily:'EB Garamond, serif'}}>SHOP</span></b></NavLink>
                      </BarLogoContainer>
                    </LogoContainer>
                    <NavMenu className="navbar">
                        <NavLink 
                        exact 
                        activeClassName="menu_active" 
                        className="menu-item" 
                        to="/">
                          Home
                        </NavLink>

                        <NavLink 
                        exact 
                        activeClassName="menu_active" 
                        className="menu-item" 
                        to="/product">
                          Products
                        </NavLink>

                        <NavLink 
                        exact
                        activeClassName="menu_active" 
                        className="menu-item" 
                        to="/about">
                          About
                        </NavLink>
                        
                        <NavLink 
                        exact
                        activeClassName="menu_active" 
                        className="menu-item" 
                        to="/contact">
                          Contact
                        </NavLink>

                        <NavLink 
                        exact
                        activeClassName="menu_active" 
                        className="menu-item" 
                        to="/admin">
                          Admin
                        </NavLink>

                    </NavMenu>
                    
                    <NavLogin>
                        {
                          initialState ? 
                          
                        
                            <Stack direction="row" spacing={2}>
                              <Avatar sx={{ bgcolor: deepOrange[500], cursor:'pointer' }} className="bg-danger" onClick={ logout} >{ initialState }</Avatar>
                              <LogoutContainer id="logoutContainer1">
                                <h6 style={{cursor:'pointer'}} onClick={ logOutID }> Logout </h6>
                              </LogoutContainer>
                            </Stack>  
                         
                          :
                          
                          <Button outline color="danger" className="menu-item"  onClick={ren}> <FiLogIn className="logBtns" /> SignIn </Button>
                        }
                      
                    </NavLogin>
                    
                    <MobLoginContainer>
                    
                    {
                      initialState ?
                    
                        <Logger>
                          <Stack direction="row" spacing={2}>
                              <Avatar sx={{ bgcolor: deepOrange[500], cursor:'pointer' }} className="bg-danger" onClick={ logout1} >{ initialState }</Avatar>
                              <LogoutContainer1 id="logoutContainer">
                                <h6 style={{cursor:'pointer'}} onClick={ logOutID }> Logout </h6>
                              </LogoutContainer1>
                          </Stack>
                        </Logger>
              
                      : null
                    }
                    </MobLoginContainer>
                    
                </Nav>
            </div>

              
        </>
    )
}

export default Navbar;