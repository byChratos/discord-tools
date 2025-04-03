import React, { useContext } from "react";
import NavigationBar from "./NavigationBar";
import ThemePicker from "./ThemePicker";
import { ThemeContext } from "./ThemeContext";

function Layout({ children }: { children: React.ReactNode }) {
    
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`w-full h-full flex flex-row bg-bgPrimary theme-${theme}`}>
            <NavigationBar />
            <ThemePicker />
            {children}
        </div>
    );
}

export default Layout;