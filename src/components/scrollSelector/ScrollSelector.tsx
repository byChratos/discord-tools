import { Dispatch, SetStateAction, useState } from "react";
import { elementAtRelativeIndex } from "../../libraries/General";
import { twMerge } from "tailwind-merge";
import ScrollSelectorButton from "./ScrollSelectorButton";

function ScrollSelector({possibleValues, selectedValue, setSelectedValue, className}: {possibleValues: Array<string | number>, selectedValue: any, setSelectedValue: Dispatch<SetStateAction<any>>, className?: string}) {

    const[isOpen, setOpen] = useState(false);

    function handleScroll(event: React.WheelEvent<HTMLDivElement>) {
        let modifier: number;

        if(event.deltaY == 0) { // Scroll to the side on the x-axis results in two steps at once
            if(event.deltaX > 0) {
                modifier = -2;
            } else {
                modifier = +2;
            }
        } else { // Normal scroll on y-axis results in single steps
            if(event.deltaY > 0) {
                modifier = -1;
            } else {
                modifier = +1;
            }
        }

        const newValue = elementAtRelativeIndex(possibleValues, selectedValue, modifier);
        setSelectedValue(newValue);
    }

    return(
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onWheel={handleScroll}
            className={twMerge(className, "flex flex-col mt-auto mb-auto")}
        >
            {isOpen && <ScrollSelectorButton className="text-s text-textSecondary" possibleValues={possibleValues} selectedValue={selectedValue} setSelectedValue={setSelectedValue} relativeIndex={+2}/>}
            {isOpen && <ScrollSelectorButton className="text-lg text-textSecondary" possibleValues={possibleValues} selectedValue={selectedValue} setSelectedValue={setSelectedValue} relativeIndex={+1}/>}
                            
            <button className="w-[150px] py-2 rounded-lg bg-blue-900 text-2xl text-textPrimary">{selectedValue}</button>
                            
            {isOpen && <ScrollSelectorButton className="text-lg text-textSecondary" possibleValues={possibleValues} selectedValue={selectedValue} setSelectedValue={setSelectedValue} relativeIndex={-1}/>}
            {isOpen && <ScrollSelectorButton className="text-s text-textSecondary" possibleValues={possibleValues} selectedValue={selectedValue} setSelectedValue={setSelectedValue} relativeIndex={-2}/>}
        </div>
    )
}

export default ScrollSelector;