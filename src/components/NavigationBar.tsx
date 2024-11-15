import React from "react";
import NavigationButton from "./NavigationButton";

function NavigationBar() {
    
    const pages = [{ name: "H", link: "/"}, { name: "T", link: "/timestamp" }]

    return(
        <div className="h-fit w-[100px] flex-shrink-0 mx-3 p-2 flex flex-col bg-red-600 rounded-[32px] items-center self-center">
            {pages.map((page, index) => (
                <React.Fragment key={page.name}>
                    <NavigationButton name={page.name} link={page.link} className={index != 0 ? 'mt-2' : ''}/>
                </React.Fragment>
            ))}
        </div>
    );

}

export default NavigationBar;