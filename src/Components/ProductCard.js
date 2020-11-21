import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import ShoppingBasketSharpIcon from "@material-ui/icons/ShoppingBasketSharp";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "140",
  },
  flexbox: {
    display: "flex",
  },
  button: {
      display: 'flex',
      justifyContent:'flex-end'
  },
  iconbutton: {
    top: "auto",
    right: theme.spacing(-1),
    bottom: theme.spacing(2),
    left: "auto",
    position: "relative",
    margin: theme.spacing(0),
  },
}));

const ProductCard = ({ img, name, category, isRedeemHistory, cost, coins }) => {
  const classes = useStyles();
  console.log(isRedeemHistory, 'en card')
  return (
    <Card>
      <CardContent>
        <div className={classes.flexbox}>
          <CardMedia
            component="img"
            height="220"
            className={classes.image}
            image={img}
            alt={name}
          />
        </div>
        <Typography variant="subtitle2" color="textSecondary">
          {category}
        </Typography>
        <Typography variant="h6">{name}</Typography>
        {!isRedeemHistory?   
        <div className={classes.button}>
        <Button disabled={Boolean(coins < cost)} variant="contained" color="primary" size='small'>
            {coins >= cost?'Comprar':`Te faltan ${cost-coins} puntos`}
        </Button>
        </div>
        :null}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
