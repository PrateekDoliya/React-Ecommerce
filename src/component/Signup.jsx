import React, { useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
import './Signup.css';
import { BsInfoLg } from "react-icons/bs";
import { Link, useHistory } from 'react-router-dom';
import { MdArrowRight } from "react-icons/md";
import axios from 'axios';
import { NavLink } from './NavbarElements';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { LoginAction } from './action/Login';

const Signup = () => {
    
    let [signUp, setSignUp] = useState({roll:Math.floor((Math.random() * 100) + 1),branch:'website',year:0, username:'',first_name:'',last_name:'', email:'',password:''});
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState(true);
    let history = useHistory();
    const dispatch = useDispatch();

    const createAccountEvent = (e) => {
        setSignUp({...signUp,[e.target.name] : e.target.value});
    }

    const handleClose = ( reason ) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackBar(false);
      };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });  

    const createAccount = async (e) => {
        e.preventDefault();
        let res = await axios.post(`https://restp.herokuapp.com/student/`, signUp)
        console.log(res);
        if( res.status === 201) {
            setOpenSnackBar(true)
            setTimeout( ()=> {
                history.push("/")
            },500)
            let LoginName = signUp.username.substr(0,1);
            LoginName = LoginName.toUpperCase();
            // console.log(LoginName);
            dispatch(LoginAction({name:LoginName}))
        } else {
            setOpenSnackBar(true)
            setSnackBarMessage(false)
        }
           
    }

    return (
        <>
            <div className="col-9 col-sm-9 col-md-6 col-lg-4 main-contaner mx-auto py-2 py-md-3 px-3 px-md-4 d-flex flex-column">
            <NavLink exact to="/" style={{fontWeight:'bolder',fontSize:'35px'}} id="Logo" className="my-3 justify-content-center"><b><span style={{fontFamily:'EB Garamond, serif', color:'black'}}>MY</span><span className="text-danger" style={{fontFamily:'EB Garamond, serif'}}>SHOP</span></b></NavLink>
                <span className="heading"> Create Account </span>
                <form action="" onSubmit={ createAccount }>
                    <div className="form-group mt-1">
                        <Label>Your Name</Label>
                        <Input
                            type="text"
                            className="form-control"
                            placeholder=""
                            required
                            name="username"
                            value={ signUp.username }
                            onChange={ createAccountEvent }
                        />    
                    </div>

                    <div className="form-group mt-3">
                        <Label>Mobile Number</Label>
                        <Input
                            type="number"
                            className="form-control"
                            placeholder=" Mobile Number "
                            maxLength={10}
                        />    
                    </div>

                    <div className="form-group mt-3">
                        <Label>Email (Optional)</Label>
                        <Input
                            type="email"
                            className="form-control"
                            placeholder=""
                        />    
                    </div>

                    <div className="form-group mt-3">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            className="form-control"
                            placeholder="Atleast 8 Characters"
                            value={ signUp.password }
                            name="password"
                            onChange = {createAccountEvent}
                            required
                        />
                    </div>

                    <div className="form-group mt-1">
                    <span style={{fontSize:'15px'}}><BsInfoLg style={{fontSize:'12px'}} />Passwords must be at least 8 characters.</span>
                    </div>

                    <div className="form-group mt-3">
                        <Button outline color="danger" className="form-control"> Create Account </Button>
                    </div>
                </form>
                <div className="mt-3">
                    <span> Already have an account? <Link to="/"> Sign in   <MdArrowRight /></Link></span>
                </div>
            </div>


            {/* SNACKBAR CODE START */}
            <Stack spacing={2} sx={{ width: '100%' }}>
            
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackBarMessage ? 'success' : 'error'} sx={{ width: '100%' }}>
                {snackBarMessage ? 'Login Successfull' : 'Something Went Wrong'}
                </Alert>
            </Snackbar>
            
            </Stack>
            {/* SNACKBAR CODE Ends */}
        </>
    )
}

export default Signup;
