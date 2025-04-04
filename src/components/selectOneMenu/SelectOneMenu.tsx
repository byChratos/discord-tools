import { Dispatch, SetStateAction } from "react";
import SelectOneMenuButton from "./SelectOneMenuButton";

function SelectOneMenu({allOptions, selectedOption, setSelectedOption}: {allOptions: string[], selectedOption: string, setSelectedOption: Dispatch<SetStateAction<string>>}) {
    return(
        <div className="w-fit h-fit">
            {allOptions.map((option, index) => (
                <SelectOneMenuButton key={option} title={option} select={setSelectedOption} isSelected={option == selectedOption} className={index != 0 ? `ml-2` : ``}/>
            ))}
        </div>
    )
}

export default SelectOneMenu;