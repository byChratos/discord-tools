import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { elementAtRelativeIndex } from "../../libraries/General";

function ScrollSelectorButton({possibleValues, selectedValue, setSelectedValue, relativeIndex, className}: {possibleValues: Array<string | number>, selectedValue: any, setSelectedValue: Dispatch<SetStateAction<any>>, relativeIndex: number, className?: string}) {
    
    const displayValue = elementAtRelativeIndex(possibleValues, selectedValue, relativeIndex);
    
    return(
        <button className={twMerge(className, "text-textPrimary")} onClick={() => setSelectedValue(displayValue)}>
            {displayValue}
        </button>
    )
}

export default ScrollSelectorButton;