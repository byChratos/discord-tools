import { createContext, Dispatch, SetStateAction } from "react";
import { Time } from "../../../../data/Time";

export interface TimeContextType {
    time: Time,
    setTime: Dispatch<SetStateAction<Time>>
}

export const TimeContext = createContext<TimeContextType | null>(null);