import {DISABLE_AIRLY, ENABLE_AIRLY, FETCH_AIRLY, TOGGLE_AIRLY} from "../actions";

export default function(state = {data: [], loaded: false, enabled: false}, action){
    switch(action.type){
        case FETCH_AIRLY:
            if(!state.loaded){
                return {...state, data: action.payload, loaded: true};
            }
            else{
                return state;
            }
        case TOGGLE_AIRLY:
            return {...state, enabled: !state.enabled};
        case ENABLE_AIRLY:
            return {...state, enabled: true};
        case DISABLE_AIRLY:
            return {...state, enabled: false};
        default:
            return state;
    }
}