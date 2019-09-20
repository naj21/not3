import React, { useEffect, useReducer, createContext } from 'react';
import noteReducer, { initialState } from '../reducers/noteReducer';

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
    const [noteState, dispatch] = useReducer(noteReducer, initialState);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(noteState.notes));
    }, [noteState.notes]);

    return (
        <NoteContext.Provider value={{noteState, dispatch}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;