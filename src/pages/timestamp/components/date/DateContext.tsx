import { createContext, Dispatch, SetStateAction } from "react";
import { Date } from "../../../../data/Date";

export interface DateContextType {
    date: Date | null,
    setDate: Dispatch<SetStateAction<Date | null>>
}

export const DateContext = createContext<DateContextType | null>(null);