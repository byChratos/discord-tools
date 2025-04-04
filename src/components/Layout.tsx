import React, { useContext } from "react";
import NavigationBar from "./NavigationBar";
import { ThemeContext } from "./theme/ThemeContext";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
    
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`w-full h-full flex flex-col bg-bgPrimary theme-${theme}`}>
            <NavigationBar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;