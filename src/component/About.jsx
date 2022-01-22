import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import { AboutImg } from './url';


const MainSection = styled.div`
    width: 100%;
	min-height: 84vh;
	/* background-color: #ddd; */
`;

const Container = styled.div`
    width: 80%;
	display: block;
	margin:auto;
	padding-top: 100px;

    @media screen and (max-width: 768px){
        width: 80%;
        display: block;
        margin:auto;
        padding-top:50px;
}
`;

const ContentSection = styled.div`
    float: left;
	width: 55%;

    @media screen and (max-width: 768px){
        float:none;
        width:100%;
        display: block;
        margin:auto;
    }
`;

const Title = styled.div`
    text-transform: uppercase;
	font-size: 28px;

    @media screen and (max-width: 768px){
        text-align: center;
	    font-size: 19px;
    }
`;


const Content = styled.div`
   h3 {
        margin-top: 20px;
        color:#5d5d5d;
        font-size: 21px;
   }

   p {
        margin-top: 10px;
        font-family: sans-serif;
        font-size: 18px;
        line-height: 1.5;
   }
`;

const Button = styled.div`
    
    margin-top: 30px;
    
    a {
        background-color: #3d3d3d;
        padding:12px 40px;
        text-decoration: none;
        color:#fff;
        font-size: 25px;
        letter-spacing: 1.5px;
    }

    a:hover{
    	background-color: #a52a2a;
	    color:#fff;
    }

    @media screen and (max-width: 768px){
        text-align: center;

        a {
            padding:9px 30px;
        }
    }

`;


const Social = styled.div`
    margin: 40px 40px;
    
    i{
        color:#a52a2a;
        font-size: 30px;
        padding:0px 10px;
    }

    i:hover{
        color:#3d3d3d;
    }

    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

const ImageSection = styled.div`
    float: right;
	width: 40%;

    img{
    	width: 100%;
	    height: auto;
    }

    @media screen and (max-width: 768px) {
        float:none;
	    width:100%;

        img {
            width: 100%;
            height: auto;
            display: block;
            margin:auto;
        }
    }
`;


const About = () => {
    return (
        <>
            <MainSection>
                <Container>
                    <ContentSection>
                        <Title>
                            <h1>About Us</h1>
                        </Title>

                        <Content>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                            <Button>
                                <Link to='/about'> Read More </Link>
                            </Button>
                        </Content>
                        
                        <Social>
                            <i><GrFacebookOption /></i>
                            <i><GrTwitter /></i>
                            <i><GrInstagram /></i>
                        </Social>
                    </ContentSection>

                    <ImageSection>
                        <img src={ AboutImg } alt="ABOUT" />
                    </ImageSection>
                </Container>
            </MainSection>
        </>
    )
}

export default About;
