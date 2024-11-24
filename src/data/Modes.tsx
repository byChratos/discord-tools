export interface Mode {
    name: string,
    flag: string
}

export const EMPTY_FLAG: string = "DO_NOT_SET";

const modes: Mode[] = [
    { name: "Default", flag: EMPTY_FLAG },
    { name: "Short Time", flag: "t" },
    { name: "Long Time", flag: "T" },
    { name: "Short Date", flag: "d" },
    { name: "Long Date", flag: "D" },
    { name: "Short Date/Time", flag: "f" },
    { name: "Long Date/Time", flag: "F" },
    { name: "Relative Time", flag: "R" }
]

export default modes;
