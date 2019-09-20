import React, { createContext, useState, useEffect  } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [backdrop, setBackdrop] = useState(false);
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.isDark));

    useEffect(() => {
        localStorage.setItem('isDark', isDark);
        document.getElementsByTagName('html')[0].setAttribute('data-theme', `${isDark ? 'dark' : ''}`);
    }, [isDark]);

    const toggleBackdrop = () => {
        setBackdrop(!backdrop);
    } 

    const toggleMode = () => {
        setIsDark(!isDark);
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.add('transition');
        }, 700);
    }
    
    return (
        <ThemeContext.Provider value={{backdrop, isDark, setIsDark, toggleMode, toggleBackdrop}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;