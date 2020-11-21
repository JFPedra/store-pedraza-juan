import Main from '../Components/Main';
import {connect} from 'react-redux';
import {fetchProducts} from '../Actions/GetProductsAndUserData';

const mapStatetoProps = (state, ownprops) => ({
    coins: state.userReducer.points,
    products : state.productReducer,
    isLoading: state.loadingReducer,
    isRedeemHistory: state.isReedemHistoryReducer,
    filter: state.filtersReducer
})
const mapActionstoProps = {
    fetchProducts
}

export default connect(mapStatetoProps, mapActionstoProps) (Main);