
import { Record } from "immutable";
import { TAuthState, ActionBase, } from "../../models";
import { LOGIN_DONE, LOGOUT_DONE } from "../actions";

const initialState: TAuthState = new (Record({
    userId: null,
}))()
export default (state = initialState, action: ActionBase): TAuthState => {
    switch (action.type) {
        case LOGIN_DONE:
            return state;
        case LOGOUT_DONE:
            return state;
        default:
            return state;
    }
}