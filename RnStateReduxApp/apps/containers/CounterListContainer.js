/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';

import App from '../components/App';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    counter: state.counter,
});


const mapDispatchToProps = (dispatch) => ({
    handleIncrement: (index) => dispatch(actions.increment(index)), // + 버튼 누르는거
    handleDecrement: (index) => dispatch(actions.decrement(index)), // - 버튼 누르는거
    handleAddCounter: () => dispatch(actions.add()),
    handleRemoveCounter: () => dispatch(actions.remove()),
});


//connect(state, action  매핑값) (Presentation [Component dir] comp 연결 );
const counterListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App);

export default counterListContainer;
