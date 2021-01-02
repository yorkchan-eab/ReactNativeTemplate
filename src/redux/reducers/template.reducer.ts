
import { ActionBase, TTemplateState } from "../models";
import {
    COUNTER_PLUS,
    COUNTER_ASYNC_PLUS_DONE,
} from "../actions";

export default (state: TTemplateState, action: ActionBase): TTemplateState => {
    if (!state) {
        state = {
            counter: 0
        }
    }
    switch (action.type) {
        case COUNTER_PLUS:
        case COUNTER_ASYNC_PLUS_DONE:
            {
                return {
                    counter: state.counter + 1
                };
            }

        default:
            return state;
    }
}