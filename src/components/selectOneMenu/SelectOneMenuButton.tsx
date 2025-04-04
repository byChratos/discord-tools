import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

function SelectOneMenuButton({title, select, isSelected, className}: {title: string, select: Dispatch<SetStateAction<string>>, isSelected: boolean, className?: string}) {
    console.log(isSelected);
    return(
        <button onClick={() => select(title)} className={twMerge(className, `bg-secondary p-4 rounded-lg ${isSelected ? 'bg-primary' : ''}`)}>
            {title}
        </button>
    )
}

export default SelectOneMenuButton;