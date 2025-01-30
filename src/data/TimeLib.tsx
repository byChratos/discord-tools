import { Dispatch, SetStateAction } from "react";
import { Time } from "./Time";

export function calculateHour(hour: number, modifier: number) {
    //Calculates the hour when going forward x hours or back from a certain hour
    //e.g. going 2 hours forward from 23 is 1, 3 from 23 is 2 etc.
    
    let sum: number = hour + modifier;

    if(sum > 0) {
        return sum % 24;
    }

    while(sum < 0) {
        sum = 24 + sum;
    }

    return sum;
}

export function calculateMinute(minute: number, modifier: number) {
    //Same as calculateHour but for minutes

    let sum: number = minute + modifier;

    if(sum > 0) {
        return sum % 60;
    }

    while(sum < 0) {
        sum = 60 + sum;
    }

    return sum;
}

export function changeHour(hour: number, minute: number, modifier: number, setTime: Dispatch<SetStateAction<Time | null>>) {

    let newHour: number;
    newHour = calculateHour(hour, modifier);

    const newTime: Time = {
        hour: newHour,
        minute: minute
    };
    setTime(newTime);
}

export function changeMinute(hour: number, minute: number, modifier: number, setTime: Dispatch<SetStateAction<Time | null>>) {

    let newMinute: number;
    newMinute = calculateMinute(minute, modifier);

    const newTime: Time = {
        hour: hour,
        minute: newMinute
    };
    setTime(newTime);
}