import { createContext, Dispatch, SetStateAction } from "react";
import { Time } from "../../../../data/Time";

export interface TimeContextType {
    time: Time | null,
    setTime: Dispatch<SetStateAction<Time | null>>
}

export const TimeContext = createContext<TimeContextType | null>(null);