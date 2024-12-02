import { useContext, useState } from "react";
import { TimeContext, TimeContextType } from "./TimeContext";
import { Time } from "../../../../data/Time";
import TimeSelector from "./TimeSelector";

function TimeField() {

    const context: TimeContextType | null = useContext(TimeContext);
    const timeSelection: Time | null | undefined = context?.time;

    const [isSelectorOpen, setSelectorOpen] = useState<Boolean>(false);

    if(context == null  || timeSelection == undefined || timeSelection == null) {
        //TODO Error Handler
        return(
            <p>ERROR</p>
        )
    }

    function previousHour(hour: number) {
        if(hour > 0) {
            return hour - 1;
        }

        return 23;
    }

    function nextHour(hour: number) {
        if(hour < 23) {
            return hour + 1;
        }

        return 0;
    }

    function previousMinute(minute: number) {
        if(minute > 0) {
            return minute - 1;
        }

        return 59;
    }

    function nextMinute(minute: number) {
        if(minute < 59) {
            return minute + 1;
        }

        return 0;
    }

    function changeHour(hour: number, minute: number, modifier: number) {

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
        context?.setTime(newTime);
    }

    function changeMinute(hour: number, minute: number, modifier: number) {

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
        context?.setTime(newTime);
    }

    return(
        <div className="w-full h-fit p-5 flex flex-row rounded-xl bg-red-300 mr-2">

            <div className="h-full flex flex-col">
                <button onClick={() => changeHour(timeSelection.hour, timeSelection.minute, +1)}>{nextHour(timeSelection.hour)}</button>
                
                <button>{timeSelection.hour}</button>
                
                <button onClick={() => changeHour(timeSelection.hour, timeSelection.minute, -1)}>{previousHour(timeSelection.hour)}</button>
            </div>

            <div className="w-[10px]"></div>

            <div className="h-full flex flex-col">
                <button onClick={() => changeMinute(timeSelection.hour, timeSelection.minute, +1)}>{nextMinute(timeSelection.minute)}</button>
                <button>{timeSelection.minute}</button>
                <button onClick={() => changeMinute(timeSelection.hour, timeSelection.minute, -1)}>{previousMinute(timeSelection.minute)}</button>
            </div>

            {/* <p>{timeSelection.hour}:{timeSelection.minute}</p> */}

            {/* <button className="ml-3 p-4 bg-red-600 rounded-xl" onClick={() => setSelectorOpen(!isSelectorOpen)}>Edit</button>

            {isSelectorOpen && <TimeSelector time={timeSelection} setTime={context.setTime}/>} */}

        </div>
    )

}

export default TimeField;