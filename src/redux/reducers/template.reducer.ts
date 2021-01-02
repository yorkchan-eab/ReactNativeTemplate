
import { Record } from "immutable";
import { ActionBase, TTemplateState } from "../../models";
import {
    COUNTER_PLUS,
    COUNTER_ASYNC_PLUS_DONE,
} from "../actions";

const initialState: TTemplateState = new (Record({
    counter: null,
}))();
export default (state = initialState, action: ActionBase): TTemplateState => {

    switch (action.type) {
        case COUNTER_PLUS:
        case COUNTER_ASYNC_PLUS_DONE:
            {
                return state.set('counter', state.get('counter') + 1);
            }
        default:
            return state;
    }
}