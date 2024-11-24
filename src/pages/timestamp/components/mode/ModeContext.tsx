import { createContext, Dispatch, SetStateAction } from "react"
import { Mode } from "../../../../data/Modes";

export interface ModeContextType {
    mode: Mode,
    setMode: Dispatch<SetStateAction<Mode>>;
}

export const ModeContext = createContext<ModeContextType | null>(null);
