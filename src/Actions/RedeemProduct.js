const redeemSucceed = () =>({
    type:'SUCCESS'
});
const redeemFailed = () =>({
    type:'FAILED'
});
const fetchReedemProduct = (id) => {
    return (dispatch) => {
        console.log('se va a hacer fetch del producto:', id)
        fetch ('https://coding-challenge-api.aerolab.co/redeem', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIyYzQ1NGI5NTIzZTAwMjA3ZTFmYzUiLCJpYXQiOjE2MDU1NTExODh9.KM9DA-3KKSQ4xg-AfoK9uNbOWw4gmRlgcCWcrAyWClA'
            },
            body: JSON.stringify({'productId':id})
        })
        .then(response => {
            console.log(response.json())
            dispatch(redeemSucceed())
        }
        )
        .catch( error =>{
            console.log('Falló fetch para redimir producto', error)
            dispatch(redeemFailed())
        })
    }
};

export default fetchReedemProduct;