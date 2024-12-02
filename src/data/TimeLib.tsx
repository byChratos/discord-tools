import { Dispatch, SetStateAction } from "react";
import { Time } from "./Time";

export function previousHour(hour: number) {
    if(hour > 0) {
        return hour - 1;
    }

    return 23;
}

export function nextHour(hour: number) {
    if(hour < 23) {
        return hour + 1;
    }

    return 0;
}

export function previousMinute(minute: number) {
    if(minute > 0) {
        return minute - 1;
    }

    return 59;
}

export function nextMinute(minute: number) {
    if(minute < 59) {
        return minute + 1;
    }

    return 0;
}

export function changeHour(hour: number, minute: number, modifier: number, setTime: Dispatch<SetStateAction<Time | null>>) {

    let newHour: number;
    if(modifier > 0) {
        newHour = nextHour(hour);
    } else {
        newHour = previousHour(hour);
    }

    const newTime: Time = {
        hour: newHour,
        minute: minute
    };
    setTime(newTime);
}

export function changeMinute(hour: number, minute: number, modifier: number, setTime: Dispatch<SetStateAction<Time | null>>) {

    let newMinute: number;
    if(modifier > 0) {
        newMinute = nextMinute(minute);
    } else {
        newMinute = previousMinute(minute);
    }

    const newTime: Time = {
        hour: hour,
        minute: newMinute
    };
    setTime(newTime);
}