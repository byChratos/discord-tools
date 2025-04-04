import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

function SelectOneMenuButton({title, select, isSelected, className}: {title: string, select: Dispatch<SetStateAction<string>>, isSelected: boolean, className?: string}) {
    return(
        <button onClick={() => select(title)} className={twMerge(className, `bg-secondary p-6 rounded-lg text-black text-xl ${isSelected ? 'bg-primary' : ''}`)}>
            {title}
        </button>
    )
}

export default SelectOneMenuButton;