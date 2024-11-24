import { twMerge } from "tailwind-merge";
import { Mode } from "../../../../data/Modes";
import { ModeContextType } from "./ModeContext";

function ModeButton({ mode, context, className }: { mode: Mode, context: ModeContextType, className?: string }) {

    return(
        <button onClick={() => context.setMode(mode)} className={twMerge(className, `${context.mode.name == mode.name ? 'border-[5px] border-solid border-red-600' : 'border border-solid border-blue-600'} w-fit h-fit px-10 py-5 rounded-xl bg-yellow-600`)}>
            {mode.name}
        </button>
    )

}

export default ModeButton;