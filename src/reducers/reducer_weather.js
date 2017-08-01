import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        // Never mutate the state in Redux, the same that in React
        return [ action.payload.data, ...state ];
    }
    return state;
}
