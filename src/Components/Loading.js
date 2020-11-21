import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) =>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        margin: theme.spacing(6,0),
        padding: theme.spacing(6, 0)
    }
}))


const Loading = () =>{
    const classes = useStyles()
    return(
    <div className={classes.root}>
        <CircularProgress color="secondary" size='8rem'/>
    </div>
    )
}

export default Loading
