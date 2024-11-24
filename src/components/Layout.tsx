import React from "react";
import NavigationBar from "./NavigationBar";

function Layout({ children }: { children: React.ReactNode }) {
    
    return(
        <div className="w-full h-full flex flex-row bg-blue-500">
            <NavigationBar />
            {children}
        </div>
    );
}

export default Layout;