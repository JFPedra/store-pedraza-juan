import Navbar from '../Components/Navbar';
import {connect} from 'react-redux';
import {fetchUserData} from '../Actions/GetProductsAndUserData';
import fetchAddPoints from '../Actions/AddPoints'
import {fetchRedeemHistory} from '../Actions/GetRedeemHistory'

import {fetchProducts} from '../Actions/GetProductsAndUserData';

const mapStateToProps = (state) => ({
    user: state.userReducer,
    isRedeemHistory: state.isRedeemHistoryReducer,
    products: state.productReducer
});

const mapActionsToProps = {
    fetchUserData,
    fetchAddPoints,
    fetchRedeemHistory,
    fetchProducts,
}

export default connect(mapStateToProps, mapActionsToProps)(Navbar)