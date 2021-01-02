
import { TAuthState, ActionBase, } from "../../models";
import { LOGIN_DONE, LOGOUT_DONE } from "../actions";


export default (state: TAuthState, action: ActionBase): TAuthState => {
    if (!state) {
        state = {
            userId: null
        }
    }
    switch (action.type) {
        case LOGIN_DONE:
            return { ...state };
        case LOGOUT_DONE:
            return { ...state };
        default:
            return state;
    }
}