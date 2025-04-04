import React from "react";
import NavigationButton from "./NavigationButton";

function NavigationBar() {
    
    const pages = [{ name: "H", link: "/"}, { name: "T", link: "/timestamp" }]

    return(
        <div className="h-fit w-full flex-shrink-0 mx-5 p-2 flex flex-row bg-red-500 rounded-[32px] items-center self-center">
            {pages.map((page) => (
                <React.Fragment key={page.name}>
                    <NavigationButton name={page.name} link={page.link} />
                </React.Fragment>
            ))}
        </div>
    );

}

export default NavigationBar;