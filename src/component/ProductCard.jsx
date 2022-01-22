import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from 'reactstrap';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

const ProductCard = ({ url, name, price, cmp, cat, id}) => {


  const [Open, setOpen] = useState({
    open: false,
    Transition: TransitionRight,
  });

    const initialState = useSelector( state => state.LoginReducer);
    let history = useHistory();

    const buyNow = () => {
      if(initialState === null) {
        history.push('/signIn')
      } else {
        alert("Product Added To Cart")
      }
    }

    const addToCart = ( Transition ) => {
      setOpen({
          open: true,
          Transition,
      });

      
      setTimeout( () => {handleClose()},1000)
    }

    function TransitionRight(props) {
      return <Slide {...props} direction="right" />;
    }

    

    const handleClose = () => {
      setOpen({
        ...Open,
        open: false,
      });
    }
    

    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-4">
            <Card className="cardHover" >
              <CardMedia
                component="img"
                alt="Loading"
                height="140"
                image={url}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h4 style={{fontSize:'20px'}} className="text-danger fw-bolder">{name}</h4>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h6 className="fw-bold"> &#x20B9; {price} </h6>
                  <h6 className="fw-bold"> {cat} </h6>
                  <h6 className="fw-bold"> {cmp} </h6>
                </Typography>
              </CardContent>
              <CardActions>
              <Button color="secondary" onClick={ () => {addToCart(TransitionRight)} }> Add To Bag </Button>
                <Button color="danger" onClick={ buyNow }> Buy Now </Button>
              </CardActions>
            </Card>
            </div>

            {/* SnackBar Code STARTS */}
            <Snackbar
              open={Open.open}
              onClose={handleClose}
              TransitionComponent={Open.Transition}
              message="Added To Bag"
              key={Open.Transition.name}
            />
            {/* Snackbar Code ENDS */}
        </>
    )
}

export default ProductCard;
