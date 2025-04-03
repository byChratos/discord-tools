import { createContext, Dispatch, SetStateAction } from 'react';

interface themeTypes {
    theme: string | null,
    setTheme: Dispatch<SetStateAction<string | null>>
}

export const ThemeContext = createContext<themeTypes>({
    theme: null,
    setTheme: () => {}
});