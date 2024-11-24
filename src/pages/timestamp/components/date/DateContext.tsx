import { createContext, Dispatch, SetStateAction } from "react";
import { Date } from "../../../../data/Date";

export interface DateContextType {
    date: Date,
    setDate: Dispatch<SetStateAction<Date>>
}

export const DateContext = createContext<DateContextType | null>(null);