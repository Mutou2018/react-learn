import { ModifyAction } from '../actions';
import { INCREMENT, DECREMENT } from '../constants'
import { StoreState } from '../types/index'
const enthusiasm = (state:StoreState = { value: 0, number: 0 }, action: ModifyAction) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: Math.max(1, state.value - 1) };
    default:
      return state
  }
}
export default enthusiasm