import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Loading from "./Loading";
import Card from "./ProductCard";
import { Typography, Modal } from "@material-ui/core";

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
  paper: {
    position: 'absolute',
    width: 400,
    height: '15%',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '60%',
    left: '35%',

    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    fetchProducts();
  }, []);
  React.useEffect(() => {
    if (redeemProduct) {
      setOpen(true)
    }
  }, [redeemProduct])
  React.useEffect(()=>{
    setPageNumber(1)
  },[products])

  const totalPages = Math.ceil(products.length / 16);
  const classes = useStyles();
  console.log('Categoria de filter',filters.category)
  const filteredProducts = products.filter(product => filters.category ? product.category === filters.category : product)
                                  .filter(product => product.cost <= filters.price[1] && product.cost >= filters.price[0]);
  const begin = (pageNumber - 1) * 16;
  const end = begin + 16;
  const paginationProducts = filteredProducts.slice(begin, end);
  const handlePagination = (page) => {
    setPageNumber(page);
  }
  const handleModalClosing = () =>{
    setOpen(false)
  }
  //console.log("estado actual", store.getState());
  //console.log('Is Redeem History:', isRedeemHistory)
  return (
    <main>
      <Modal
        open={open}
        onClose={handleModalClosing}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={{backgroundColor: redeemProduct === 'FAILED'? '#ff5722' :'#76ff03' }} className={classes.paper}>
          
  <Typography color='textPrimary'>{redeemProduct === 'FAILED'? 'Lo sentimos, tu producto no fue redimido, intenta de nuevo' :'Has redimido el producto de forma exitosa!'}</Typography>
  {redeemProduct === 'FAILED'?<Typography>&#x2639;</Typography>:<Typography>&#x1F601;</Typography>}
          
        </div>
      </Modal>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container className={classes.container}>
          {isRedeemHistory ? (
            <Grid item xs={12}>
              <Typography>Los productos que has redimido son:</Typography>
            </Grid>
          ) : null}
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
