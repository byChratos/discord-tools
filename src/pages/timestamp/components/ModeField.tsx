import { Dispatch, SetStateAction } from "react";
import { getAllModeNames } from "../../../data/Modes";
import SelectOneMenu from "../../../components/selectOneMenu/SelectOneMenu";

function ModeField({selectedMode, setSelectedMode}: {selectedMode: string, setSelectedMode: Dispatch<SetStateAction<string>>}) {
    return(
        <div className="w-full h-fit min-h-[200px] p-5 mt-5 flex flex-row rounded-xl bg-bgSecondary">
            <SelectOneMenu allOptions={getAllModeNames()} selectedOption={selectedMode} setSelectedOption={setSelectedMode}/>
        </div>
    )
}

export default ModeField;