
const addPoints = (newPoints) =>({
    type:'ADDPOINTS',
    newPoints
})


const fetchAddPoints = (points) =>{
    return (dispatch) => {
        console.log('se hizo fetch add points', points)

        fetch('https://coding-challenge-api.aerolab.co/user/points',{
            method: 'POST' ,
            headers: {
                'Content-Type':'application/json',
                Accept:'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIyYzQ1NGI5NTIzZTAwMjA3ZTFmYzUiLCJpYXQiOjE2MDU1NTExODh9.KM9DA-3KKSQ4xg-AfoK9uNbOWw4gmRlgcCWcrAyWClA',
            },
            body: JSON.stringify({"amount":points}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('fetch exitoso, new points:', data['New Points'])
            dispatch(addPoints(data['New Points']));
        })
        .catch(error => {console.error('Error fetchingAddPoints:', error)}) 
    }

    
}

export default fetchAddPoints;