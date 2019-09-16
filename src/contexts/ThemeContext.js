import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [backdrop, setBackdrop] = useState(false);

    const toggleBackdrop = () => {
        setBackdrop(!backdrop);
    } 
    
    return (
        <ThemeContext.Provider value={{backdrop, toggleBackdrop}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;