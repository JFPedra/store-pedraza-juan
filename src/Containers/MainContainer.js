import Main from '../Components/Main';
import {connect} from 'react-redux';
import {fetchProducts} from '../Actions/GetProductsAndUserData';
import fetchRedeemProduct from '../Actions/RedeemProduct'

const mapStatetoProps = (state, ownprops) => ({
    coins: state.userReducer.points,
    products : state.productReducer,
    isLoading: state.loadingReducer,
    isRedeemHistory: state.isRedeemHistoryReducer,
    filters: state.filtersReducer,
    redeemProduct: state.redeemProductReducer
})
const mapActionstoProps = {
    fetchProducts,
    fetchRedeemProduct
}

export default connect(mapStatetoProps, mapActionstoProps) (Main);