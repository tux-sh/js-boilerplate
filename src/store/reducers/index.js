import { INCREASE, DECREASE } from '../../constants/ActionTypes';

const initial = {
    value: 0
};

const rootReducer = (state = initial, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                value: state.value + 1
            };
        case DECREASE:
            return {
                value: state.value - 1
            };
        default:
            return state;
    }
};

export default rootReducer;
