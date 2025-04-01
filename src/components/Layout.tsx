import React from "react";
import NavigationBar from "./NavigationBar";
import ThemePicker from "./ThemePicker";

function Layout({ children }: { children: React.ReactNode }) {
    
    return(
        <div className="w-full h-full flex flex-row bg-darkBackground">
            <NavigationBar />
            <ThemePicker />
            {children}
        </div>
    );
}

export default Layout;