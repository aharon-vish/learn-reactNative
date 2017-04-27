import {combineReducers} from 'redux';
import LibraryReduce from './libraryReducers';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReduce,
    selectedLibraryId: SelectionReducer
});