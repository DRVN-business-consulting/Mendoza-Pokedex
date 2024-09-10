import React from 'react';

const MyTheme = React.createContext('light');

export const MyThemeProvider = ({children}) => {
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <MyTheme.Provider value={{
            theme,
            setTheme,
            toggleTheme,
        }}>
            {children}
        </MyTheme.Provider>
    );
};

export const useMyTheme = () => {
    return React.useContext(MyTheme);
};