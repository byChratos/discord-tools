import { useContext } from "react";
import modes, { Mode } from "../../../../data/Modes";
import ModeButton from "./ModeButton"
import { ModeContext, ModeContextType } from "./ModeContext";

function ModeField() {

    const context: ModeContextType | null = useContext(ModeContext);
    const selectedMode: Mode | undefined = context?.mode;

    if(context == null || selectedMode == undefined) {
        {/** TODO Add Error Component */}
        return(
            <p>Error</p>
        )
    }

    return(
        <div className="w-full h-fit p-5 flex rounded-xl bg-red-300 mt-2">
            <div className="w-fit h-fit ml-auto mr-auto">
                {modes.map((mode, index) => (
                    <ModeButton mode={mode} context={context} className={index != 0 ? `ml-2` : ``}/>
                ))}
            </div>
            {/*TODO Select One Menu */}
        </div>
    )

}

export default ModeField;