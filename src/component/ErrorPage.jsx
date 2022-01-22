import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const ErrorPageMainContainer = styled.div`
    height: 100vh;
    background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
    background-size: 400%;
    
`;

const ErroeContainer = styled.div`
    position: absolute;
    top: 10%;
    left: 15%;
    right: 15%;
    bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
`;

const Content = styled.div`
    h2 {
        font-size: 18vw;
        line-height: 1em;
        position: relative;
        /* font-weight: 1000; */
        font-family: 'Poppins', sans-serif;
        
        &::after {
            position: absolute;
            content: attr(data-text);
            top: 0;
            left: 0;
            right: 0;
            background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
            background-size: 400%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 1px 1px 2px rgba(255,255,255,0.25);
            animation: animate 10s ease-in-out infinite;
        }

        h4 {
            position: absolute;
            content: attr(data-text);
            top: 0;
            left: 0;
            right: 0;
            text-shadow: 1px 1px 2px rgba(255,255,255,0.4);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p {
            font-size: 1.2em;
            color: #0d0d0d;   
        }



        @keyframes animate {
            0%{
                background-position: 0 0;
            }
            25%{
                background-position: 100% 0;
            }
            50%{
                background-position: 100% 100%;
            }
            75%{
                background-position: 0% 100%;
            }
            100%{
                background-position: 0% 0%;
                }
        }
    }         
`;

const Button = styled.div`
    margin: 25px 0;
    display: inline-flex;
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;
    border: 2px solid #69a6ce;
    color: #69a6ce;
    font-weight: 500;
    padding: 10px 25px;
    border-radius: 25px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &::hover {
        background: #69a6ce;
        color: #fff;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const ErrorPage = () => {
    return (
        <>
            <ErrorPageMainContainer>
                <ErroeContainer>
                    <Content>
                        <h2  data-text="404">404</h2>
                        <h4 data-text="Opps! Page not found">
                            Opps! Page not found
                        </h4>
                        <p>
                            Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                        </p>
                        <Button>
                            <NavLink to="/">return home</NavLink>
                        </Button>
                        <Button>
                            <NavLink to="/">report a problem </NavLink>
                        </Button>
                    </Content>
                </ErroeContainer>
            </ErrorPageMainContainer>
        </>
    )
}

export default ErrorPage;
