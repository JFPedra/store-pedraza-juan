import Navbar from '../Components/Navbar';
import {connect} from 'react-redux';
import {fetchUserData} from '../Actions/GetProductsAndUserData';
import fetchAddPoints from '../Actions/AddPoints'
import {fetchRedeemHistory} from '../Actions/GetRedeemHistory'

const mapStateToProps = (state) => ({
    user: state.userReducer
});

const mapActionsToProps = {
    fetchUserData,
    fetchAddPoints,
    fetchRedeemHistory
}

export default connect(mapStateToProps, mapActionsToProps)(Navbar)