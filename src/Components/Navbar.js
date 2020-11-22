import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, 
  FormControl, InputLabel, Select, Slider, CircularProgress, Button} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons/"
import AddBoxIcon from '@material-ui/icons/AddBox';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';


const useStyles = makeStyles((theme) => ({
  home: {
    flexGrow: '0.5'
  },
  homeButton: {
    fontsize:'larger'
  },
  filter: {
    flexGrow: "2",
    display: "flex",
    justifyContent: 'space-between'
  },
  select: {
    '&:before': {
      borderColor: 'white',
  },
  '&:after': {
      borderColor: 'white',
  }
  },
  filterTypo: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: theme.spacing(2)
  },
  slider: {
    flexGrow: '1',
    padding: theme.spacing(0,2)
  },
  points: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "flex-end",
  },
  pointsMenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
  },
  addPointsButton: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  flexbox: {
    display: "flex",
    justifyContent: "space-between",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function MenuAppBar({user, isRedeemHistory, fetchUserData, fetchAddPoints, fetchRedeemHistory, fetchProducts}) {
  const [anchorAccountMenu, setAnchorAccountMenu] = React.useState(null);
  
  React.useEffect(() => {
    fetchUserData()
  }, []);


  const classes = useStyles();
  const handleAccountMenu = (event) => {
    //console.log(event.currentTarget);
    setAnchorAccountMenu(event.currentTarget);
  };

  const handleRedeemHistoryButton = () =>{
    setAnchorAccountMenu(null);
    fetchRedeemHistory();
  }

  const handleClose = () => {
    setAnchorAccountMenu(null);
  }

  const handleHomeButton = () => {
    fetchProducts()
  }
  console.log('Is Redeem History?:',isRedeemHistory)
  //console.log(user, 'user info en Navbar');
  //console.log(store.getState(), 'esta es el state');
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.home}>
            <Button
              className={classes.homeButton}
              size="large"
              color='inherit'
              disabled={!isRedeemHistory}
              onClick={() => handleHomeButton()}
            >
              <Typography variant='h6'>
              Home
              </Typography>
            </Button>
          </div>
          <div className={classes.filter}>
            <Typography className={classes.filterTypo}>Filtrar por:</Typography>
            <CategorySelect />
            <PriceSlider />
          </div>
          <div className={classes.points}>
            <PointsMenu 
              user={user}
              fetchAddPoints={fetchAddPoints}
            />
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleAccountMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorAccountMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorAccountMenu)}
              onClose={handleClose}
              getContentAnchorEl={null}
            >
              <MenuItem disabled>{user?.name}</MenuItem>
              <MenuItem onClick={() => handleRedeemHistoryButton()}>Redeem History</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const PointsMenu = ({user, fetchAddPoints}) => {
  const [anchorAddPoints, setAnchorAddPoints] = React.useState(null);
  const classes = useStyles();
  const openAddPointsMenu = (event) => {
    //console.log(event.currentTarget);
    setAnchorAddPoints(event.currentTarget);
  };
  const handleClose = (points) => {
    setAnchorAddPoints(null);
    fetchAddPoints(points);
  };

  return(
    <div className={classes.pointsMenu}>
              <MonetizationOnRoundedIcon />
              <Typography>
                {user ? user.points : <CircularProgress />}
              </Typography>
              <IconButton
                style={{ paddingTop: "0px" }}
                aria-label="add-points"
                aria-controls="add-points"
                aria-haspopup="true"
                onClick={openAddPointsMenu}
                color="inherit"
              >
                <AddBoxIcon style={{ color: "#4caf50", fontSize: "medium" }} />
              </IconButton>
              <Menu
                id="add-points"
                anchorEl={anchorAddPoints}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorAddPoints)}
                onClose={handleClose}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={()=>handleClose(1000)}>1000 pts</MenuItem>
                <MenuItem onClick={()=>handleClose(5000)}>5000 pts </MenuItem>
                <MenuItem onClick={()=>handleClose(7500)}>7500 pts</MenuItem>
              </Menu>
            </div>
  )
}
const CategorySelect = () => {
  const [category, setCategory] = React.useState('');
  const categorities = ["Phones", "Gaming", "Laptods", "Cameras", "Audio"];
  const classes = useStyles();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="categoria-select">Categoría</InputLabel>
      <Select
        native
        className={classes.select}
        value={category}
        onChange={handleChange}
        label="Categoria"
        inputProps={{
          name: "Categoria",
          id: "categoria-select",
        }}
      >
        <option aria-label="None" value="" />
        {categorities.map((categoryName) => (
          <option value={categoryName} key={categoryName}>{categoryName}</option>
        ))}
      </Select>
    </FormControl>
  );
};

const PriceSlider = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 3000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeComitted = (event, value) => {
    console.log(value);
  };

  return (
    <div className={classes.slider}>
      <Typography id="range-slider" gutterBottom>
        Rango de precios
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChangeComitted}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={3000}
        min={0}
      />
    </div>
  );
};
