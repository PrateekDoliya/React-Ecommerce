import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Label } from 'reactstrap';
import './AdminLogin.css';
import Admin from './Admin';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const AdminLogin = () => {

    let [data, setData] = useState({id:'',pwd:''});
    let [toggle, setToggle] = useState(true)

    const getLoginEvent = (e) => {
        setData( {...data, [e.target.name]: e.target.value} )
        document.getElementById('adminError').style.display="none";
        document.getElementById('pwdError').style.display="none";
    }

    const getLogin = (e) => {
        e.preventDefault();
        if( data.id === 'admin') {
            if(data.pwd === 'myshop@') {
                ReactDOM.render(<Admin/>,document.getElementById('root'))
            } else {
                document.getElementById('pwdError').style.display="block";
            }
        } else {
            document.getElementById('adminError').style.display="block";
        }
    }

    const handleClick = () => {
        setToggle(!toggle)
      };

    return (
        <>
          <div className="container">
              <form action="" onSubmit={ getLogin } className="col-10 mt-3 mx-auto">
                <div className="form-group">
                    <Label>Enter ID: </Label>
                    <Input
                        type="text"
                        placeholder="Please Enter Id As admin"
                        name="id"
                        className="form-control"
                        value={ data.id }
                        onChange={ getLoginEvent }
                        required
                        autoComplete="off"
                    />    
                    <span id="adminError" className="adminError"> *Please Enter Correct ID</span>
                </div>

                <div className="form-group mt-4">
                    <Label>Enter Password: </Label>
                    <div className="row">
                        <div className="col-10 col-md-11">
                            <Input
                                type={ toggle ? 'password' : 'text'}
                                placeholder="Enter Password As myshop@"
                                name="pwd"
                                className="form-control"
                                value={ data.pwd }
                                onChange={ getLoginEvent }
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="col-2 col-md-1 d-flex justify-content-center align-items-center">
                        {
                            <Stack direction="row" spacing={1}>
                                <Chip label={ toggle ? 'Show' : 'Hide'} variant="outlined" onClick={handleClick} />
                            </Stack>
                        }
                        </div>
                    </div>
                    
                    <span id="pwdError"  className="adminError"> *Please Enter Correct Password</span>
                </div>

                <div className="form-group mt-3 ">
                    <Button outline color="danger"> Login </Button>
                </div>
              </form>
          </div>  
        </>
    )
}

export default AdminLogin;
