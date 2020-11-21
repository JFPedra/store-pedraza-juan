import isLoading from './IsLoading';

const getRedeemHistory = (products) =>({
    type:'REDEEM_HISTORY',
    products
})

export const isRedeemHistory = (bool) =>({
    type: 'IS_REDEEMHISTORY',
    isRedeemHistory: bool
})

export const fetchRedeemHistory = () =>{
    return (dispatch => {
        dispatch(isLoading(true));
        fetch('https://coding-challenge-api.aerolab.co/user/history', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIyYzQ1NGI5NTIzZTAwMjA3ZTFmYzUiLCJpYXQiOjE2MDU1NTExODh9.KM9DA-3KKSQ4xg-AfoK9uNbOWw4gmRlgcCWcrAyWClA'
            }  
        })
        .then(response => response.json())
        .then(products =>dispatch(getRedeemHistory(products)))
        .then(dispatch(isRedeemHistory(true)))
        .then(dispatch(isLoading(false)))
        .catch(error =>console.log('Error fetching Redeem History', error) )
    })
}
