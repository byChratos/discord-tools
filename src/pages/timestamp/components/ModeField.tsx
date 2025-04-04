import { Dispatch, SetStateAction } from "react";
import SelectOneMenu from "../../../components/selectOneMenu/SelectOneMenu";
import { getAllModeNames } from "../../../libraries/General";

function ModeField({selectedMode, setSelectedMode}: {selectedMode: string, setSelectedMode: Dispatch<SetStateAction<string>>}) {
    return(
        <div className="w-full h-fit p-5 mt-5 flex flex-row rounded-xl bg-bgSecondary justify-center">
            <SelectOneMenu allOptions={getAllModeNames()} selectedOption={selectedMode} setSelectedOption={setSelectedMode}/>
        </div>
    )
}

export default ModeField;