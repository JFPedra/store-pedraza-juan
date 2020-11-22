import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Loading from "./Loading";
import Card from "./ProductCard";
import store from "../Store";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  gridCard: {
    padding: theme.spacing(1),
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Main = ({
  products,
  isRedeemHistory,
  isLoading,
  filters,
  fetchProducts,
  coins,
  fetchRedeemProduct,
  redeemProduct
}) => {
  const [pageNumber, setPageNumber] = React.useState(1);
  React.useEffect(() => {
    fetchProducts();
  }, []);
  const totalPages = Math.ceil(products.length / 16);
  const classes = useStyles();
  const filteredProducts = products;
  //products.filter(product => filters.category ? product?.category === filters.category : product)
  //.filter(product => product.cost <= filters.price[1] && product.cost >= filters.price[0]);
  const begin = (pageNumber - 1) * 16;
  const end = begin + 16;
  const paginationProducts = filteredProducts.slice(begin, end);
  const handlePagination = (page) => {
    setPageNumber(page);
  };
  //console.log("estado actual", store.getState());
  //console.log('Is Redeem History:', isRedeemHistory)
  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (        
        <Grid container className={classes.container}>
          {isRedeemHistory ?<Grid item xs={12}> <Typography>Los productos que has redimido son:</Typography></Grid>:null}
          {paginationProducts.map((product, index) => (
            <Grid item key={index} xs={3} className={classes.gridCard}>
              <Card
                product={product}      
                coins={coins}
                isRedeemHistory={isRedeemHistory}
                fetchRedeemProduct={fetchRedeemProduct}
              />
            </Grid>
          ))}
          <Grid container className={classes.pagination}>
            <Pagination
              disabled={!Boolean(totalPages)}
              count={totalPages}
              color="secondary"
              onChange={(e, page) => handlePagination(page)}
            />
          </Grid>
        </Grid>
      )}
    </main>
  );
};

export default Main;
