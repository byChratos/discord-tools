// Returns a list of numbers with from as the first element and to as the last

import { months } from "../data/Date";
import modes, { EMPTY_FLAG } from "../data/Modes";

// range(1, 3) => [1, 2, 3]
export function range(from: number, to: number): number[] {
    let list: number[] = new Array<number>();
    for(let i: number = from; i < to + 1; i++) {
        list.push(i);
    }
    return list;
}

// Returns the element at the relative index
// elementAtRelativeIndex([11, 12, 13, 14, 15], 13, -1) => 12
export function elementAtRelativeIndex(list: any[], element: any, relativeIndex: number): any {
    const indexOfElement = list.indexOf(element);
    let newIndex = indexOfElement + relativeIndex;

    while(newIndex < 0 || newIndex > list.length - 1) {
        if(newIndex < 0) {
            newIndex = list.length + newIndex;  
        } else if(newIndex > list.length - 1) {
            newIndex = newIndex - list.length;
        }
    }

    return list[newIndex];
}

export function getModeFlagFromName(name: string): string {
    for(const mode of modes) {
        if(name == mode.name) {
            return mode.flag;
        }
    }
    return EMPTY_FLAG;
}

export function getAllModeNames(): string[] {
    let modeList = Array<string>();
    for(const mode of modes) {
        modeList.push(mode.name);
    }
    return modeList;
}

export function getNumberOfMonth(month: string): number {
    const num: number = months.indexOf(month) + 1;
    return num;
}