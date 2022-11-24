import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    }
    return (
        <ThemeContext.Provider value={{theme, handleTheme}}>{children}</ThemeContext.Provider>
    )
}