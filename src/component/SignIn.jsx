import React, { useState } from 'react';
import { Button, Label } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { MdArrowRight } from "react-icons/md";
import axios from 'axios';
import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { LoginAction } from './action/Login';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { NavLink } from './NavbarElements';

const SignIn = () => {

    let [userName, setUserName] = useState({roll:0,branch:'',year:0, username:'',first_name:'',last_name:'', email:'',password:''});
    let history = useHistory();
    const dispatch = useDispatch();
    let [togglePassword, setTogglePassword] = useState(true);

    const getUserName = (e) => {
        setUserName({...userName, [e.target.name]: e.target.value})
        $('#loginNameError').hide();
        $("#loginPwdError").hide();
        $("#signInButton").prop('disabled', false);
    }

    const findUser = async () => {
        let res = await axios.get(`https://restp.herokuapp.com/student/`);
        console.log(res.data)
        let data = res.data
        const loginId = data.filter( (Item) => {
            return Item.username === userName.username
        })
        // console.log(loginId[0]);
        if(loginId[0]) {
            
        } else {
            $('#loginNameError').show();
            $("#signInButton").prop('disabled', true);
        }
    }

    const signInUser = async (e) => {
        e.preventDefault();
        // let pwdValidation = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*/@/#/$/%/^/&/*/!/+/-])/;
        // const pwd = document.getElementById('pwd').value;
        let res = await axios.get(`https://restp.herokuapp.com/student/`);
        console.log(res.data)
        let data = res.data
        const loginId = data.filter( (Item) => {
            return Item.username===userName.username &&  Item.password === userName.password
        })
        if(!loginId[0])  {
            $("#loginPwdError").show();
        } else {
            let LoginName = userName.username.substr(0,1);
            // console.log(LoginName);
            LoginName = LoginName.toUpperCase();
            dispatch(LoginAction({name:LoginName}))
            history.goBack();
        } 
            
    }

    const handleClick = () => {
        setTogglePassword(!togglePassword)
      };

    return (
        <>
            <div className="col-9 col-sm-9 col-md-6 col-lg-4  mx-auto d-flex flex-column">
            <NavLink exact to="/" style={{fontWeight:'bolder',fontSize:'35px'}} id="Logo" className="my-3 mx-auto"><b><span style={{fontFamily:'EB Garamond, serif', color:'black'}}>MY</span><span className="text-danger" style={{fontFamily:'EB Garamond, serif'}}>SHOP</span></b></NavLink>
                <div className="container py-3 px-3">
                    <h2 className="heading">SignIn</h2>
                    <form onSubmit={ signInUser }>
                        <div className="form-group mt-2 ">
                            <Label><b>Username</b> or <b>Email</b></Label>
                            <input
                                type="text"
                                placeholder=""
                                className="form-control"
                                name="username"
                                autoComplete="off"
                                required
                                value={ userName.username }
                                onChange={ getUserName }
                                onBlur= { findUser }
                            /> 
                            <span className="adminError" id="loginNameError"> * No Account Found </span>   
                        </div>

                        <div className="form-group mt-2">
                            <Label><b>Password</b> </Label>
                            <div className="row">
                                <div className="col-10">
                                    <input
                                        type={togglePassword ? 'password' : 'text'}
                                        name="password"
                                        placeholder=""
                                        id="pwd"
                                        className="form-control"
                                        required
                                        value={ userName.password }
                                        onChange={ getUserName }
                                    /> 
                                </div> 

                                <div className="col-2 d-flex justify-content-center align-items-center">
                                <Stack direction="row" spacing={1}>
                                    <Chip label={ togglePassword ? 'Show' : 'Hide'} variant="outlined" onClick={handleClick} />
                                </Stack>
                                </div>
                            </div>
                            
                            <span className="adminError" id="loginPwdError" > * Invalid Password ! </span>     
                        </div>

                        <div className="form-group mt-4 ">
                            <Button outline color="danger" id="signInButton" className="form-control"> Continue  </Button>
                        </div>
                    </form>
                    <div className="mt-3" style={{fontSize:'12px'}}>
                        <span>By continuing, you agree to MYSHOP's <Link to="">Conditions of Use </Link>and <Link to="">Privacy Notice.</Link></span>
                    </div>

                    <div className="my-4">
                        <MdArrowRight style={{fontSize:'20px'}} /><span style={{color:'blue',cursor:'pointer'}}>Need Help ? </span>
                    </div>
                    <hr />
                    <div className="text-center mb-4">
                        <span> New To </span><span className="text-dark"><b>MY</b></span><span className="text-danger"><b>SHOP</b></span>
                        <Link to="/signup"><Button outline color="danger" className="form-control mt-3" > Create New MYSHOP Account</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;
