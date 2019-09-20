const localData = localStorage.getItem('notes');

export const initialState = {
    notes: localData ? JSON.parse(localData) : [],
    note: {},
};

const noteReducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.note],
                note: action.data,
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(data => data.id !== action.id),
            };
        case 'EDIT_NOTE':
            let item = state.notes.find(data => data.id === action.id);
            state.notes.delete(item);
            item = {...item, content: action.content};
            return {
                ...state,
                notes: [...state.notes, item],
            };
        case 'SET_NOTE':
            return {
                ...state,
                note: action.note,
            };
        default:
            return state;
    }
}

export default noteReducer;