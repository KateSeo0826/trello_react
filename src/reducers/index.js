import { combineReducers } from 'redux';
import activeBoardReducer from './activeBoardReducer';
import boardOrderReducer from './boardOrderReducer';
import boardsReducer from './boardsReducer';
import cardsReducer from './cardsReducer';
import listReducer from './listsReducer';

export default combineReducers({
    activeBoard: activeBoardReducer,
    boardOrder: boardOrderReducer,
    boards: boardsReducer,
    cards: cardsReducer,
    lists: listReducer
});


