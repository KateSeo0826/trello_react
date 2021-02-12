import { CONSTANTS } from "../actions";
import { uuid } from "uuidv4";
console.log(uuid());

const initialState = ["board-0"];

const boardOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_BOARD: {
            const { id } = action.payload;
            return [...state, `board-${id}`];
        }
        case CONSTANTS.DELETE_BOARD: {
            const { id } = action.payload;
            const newState = state;
            delete newState[id];
            return newState;
        }
        default:
            return state;
    }
};

export default boardOrderReducer;
