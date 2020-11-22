import loadingInProgress from './IsLoading';
import {isRedeemHistory} from './GetRedeemHistory'
export const getProducts = (products) =>({
    type: 'PRODUCTS',
    products
});

export const fetchProducts = () =>{
    return (dispatch) => {
        console.log('se hizo fetch de Products');
        dispatch(loadingInProgress(true));
        fetch('https://coding-challenge-api.aerolab.co/products', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIyYzQ1NGI5NTIzZTAwMjA3ZTFmYzUiLCJpYXQiOjE2MDU1NTExODh9.KM9DA-3KKSQ4xg-AfoK9uNbOWw4gmRlgcCWcrAyWClA'
            }
        }).then(response => response.json())
        .then(products =>{ dispatch(getProducts(products))
            dispatch(isRedeemHistory(false))
            dispatch(loadingInProgress(false))
        })
        .catch(error => {console.error('Error fetchingProducts:', error)});
    }
};
export const getUserData = (user) =>({
    type: 'USER',
    user
});

export const fetchUserData = () =>{
    return (dispatch) => {
        console.log('se hizo fetch de User')
        dispatch(loadingInProgress(true))
        fetch('https://coding-challenge-api.aerolab.co/user/me', {
            method: 'GET' ,
            headers: {
                'Content-Type':'application/json',
                Accept:'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIyYzQ1NGI5NTIzZTAwMjA3ZTFmYzUiLCJpYXQiOjE2MDU1NTExODh9.KM9DA-3KKSQ4xg-AfoK9uNbOWw4gmRlgcCWcrAyWClA'
            }
        }).then(response => response.json())
        .then(user => {
            console.log('Usuario',user)
            dispatch(getUserData(user))
            dispatch(loadingInProgress(false))
        })
        .catch(error => {console.log('Error fetchUserData', error)});
    }
};