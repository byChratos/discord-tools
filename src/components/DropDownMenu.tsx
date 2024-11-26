import { useState } from "react";
import { twMerge } from "tailwind-merge";

function DropDownMenu({ selectedValue, values, onSelect, className }: { selectedValue: string | number, values: Array<Object>, onSelect: Function, className?: string }) {
    
    const [open, setOpen] = useState<Boolean>(false);
    
    return(
        <button onClick={() => setOpen(!open)} className={twMerge(className, 'bg-yellow-300 p-4 rounded-lg')}>
            {selectedValue}
        </button>
    )
}

export default DropDownMenu;