import styled from 'styled-components';

export const ItemInfo = styled.div`
    width: 100%;
    height: 5rem;
    /* background-color: lavender; */
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    @media (max-width:768px)
    {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 1fr;
    }
`;


export const ProductImg = styled.div`
    display: flex;
    justify-content: center;
    
    img {
        width: 8rem;
        height: 5rem;
        filter: drop-shadow(0rem 0.4rem 1rem #f1f7ff);
        border-radius: 1rem;
    }

    @media(max-width:768px)
    {
        display: flex;
        justify-content:center;
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 1rem;
    }
`;



export const ProductTitle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        color: var(--main-color);
        
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        text-align: left;
        color: var(--primary-color);
    }

   
    @media (max-width:768px)
    {
        margin-top: 0px;
        justify-content: center;
        align-items: center;
    }
    
`;



export const Quantity = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        border: none;
        background-color: transparent;
        color: var(--primary-color);
        outline: none;
        cursor: pointer;
    }

    input {
        width: 4rem;
        height: 1.5rem;
        box-sizing: border-box;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        text-align: center;
        text-transform: capitalize;
        color: var(--primary-color);
        margin: 0 1rem;
        border-radius: 0.5rem;
        background-color: transparent;
    }

    input:focus {
        outline: none;
    }

    @media (max-width:768px)
    {
        margin: 1rem 0 1rem 0;
        justify-content: center;
    }
`;


export const Price = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        text-transform: capitalize;
        color: var(--main-color);
    }

    @media (max-width:768px)
    {
        justify-content: center ;
        margin: 0.5rem 0;
       
    }
`;


export const RemoveItem = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 2rem;

    button {
        border: none;
        background-color: transparent;
    }

    @media (max-width:768px)
    {
        margin-top: 0;
        margin-right: 0;
        /* padding-left: 0rem; */
        justify-content: center;
        /* padding-left: 2.5rem; */
    }
`;

export const CartTotalContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content:flex-end;

    span {
        font-weight: bold;
    }
`;