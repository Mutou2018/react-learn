import { connect } from 'react-redux';
import { Dispatch } from 'redux'

import { increment, decrement } from '../store/actions'
import Counter from '../components/Counter'
import { StoreState } from '../store/types'

const mapStateToProps = (state: StoreState): StoreState => {
    ;
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onIncreament: () => dispatch(increment()),
    onDecreament: () => dispatch(decrement()),
})

// 使用connect包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);