import { useContext, useState } from "react";
import { TimeContext, TimeContextType } from "./TimeContext";
import { Time } from "../../../../data/Time";
import { calculateHour, calculateMinute, changeHour, changeMinute } from "../../../../libraries/TimeLib";

function TimeField() {

    const context: TimeContextType | null = useContext(TimeContext);
    const timeSelection: Time | null | undefined = context?.time;

    const [isHourOpen, setHourOpen] = useState<Boolean>(false);
    const [isMinuteOpen, setMinuteOpen] = useState<Boolean>(false);

    if(context == null  || timeSelection == undefined || timeSelection == null) {
        //TODO Error Handler
        return(
            <p>ERROR</p>
        )
    }

    function handleHourScroll(event: React.WheelEvent<HTMLDivElement>) {

        if(timeSelection?.hour == undefined || timeSelection.minute == undefined || context?.setTime == undefined) {
            return false;
        }

        let modifier: number;
        if(event.deltaY > 0) {
            modifier = -1;
        } else {
            modifier = +1;
        }

        changeHour(timeSelection.hour, timeSelection.minute, modifier, context.setTime);
    }

    function handleMinuteScroll(event: React.WheelEvent<HTMLDivElement>) {

        if(timeSelection?.hour == undefined || timeSelection.minute == undefined || context?.setTime == undefined) {
            return false;
        }

        let modifier: number;
        if(event.deltaY > 0) {
            modifier = -1;
        } else {
            modifier = +1;
        }

        changeMinute(timeSelection.hour, timeSelection.minute, modifier, context.setTime);
    }

    return(
        <div className="w-full h-fit min-h-[150px] p-5 flex flex-row rounded-xl bg-red-300 mr-2">

            <div className="w-fit h-fit mt-auto mb-auto p-5">
                <h2 className="text-2xl"> Time </h2>
            </div>
            

            <div 
                onMouseEnter={() => setHourOpen(true)}
                onMouseLeave={() => setHourOpen(false)}
                onWheel={handleHourScroll}
                className="h-full flex flex-col ml-auto mt-auto mb-auto"
            >
                {isHourOpen && <button className="text-xs" onClick={() => changeHour(timeSelection.hour, timeSelection.minute, +2, context.setTime)}>{calculateHour(timeSelection.hour, +2)}</button>}
                {isHourOpen && <button className="text-lg" onClick={() => changeHour(timeSelection.hour, timeSelection.minute, +1, context.setTime)}>{calculateHour(timeSelection.hour, +1)}</button>}
                
                <button className="w-[75px] py-2 rounded-lg bg-yellow-300 text-2xl">{timeSelection.hour}</button>
                
                {isHourOpen && <button className="text-lg" onClick={() => changeHour(timeSelection.hour, timeSelection.minute, -1, context.setTime)}>{calculateHour(timeSelection.hour, -1)}</button>}
                {isHourOpen && <button className="text-xs" onClick={() => changeHour(timeSelection.hour, timeSelection.minute, -2, context.setTime)}>{calculateHour(timeSelection.hour, -2)}</button>}
            </div>

            <div className="w-[10px]"></div>

            <div
                onMouseEnter={() => setMinuteOpen(true)}
                onMouseLeave={() => setMinuteOpen(false)}
                onWheel={handleMinuteScroll}
                className="h-full flex flex-col mr-auto mt-auto mb-auto"
            >
                {isMinuteOpen && <button className="text-xs" onClick={() => changeMinute(timeSelection.hour, timeSelection.minute, +2, context.setTime)}>{calculateMinute(timeSelection.minute, +2)}</button>}
                {isMinuteOpen && <button className="text-lg" onClick={() => changeMinute(timeSelection.hour, timeSelection.minute, +1, context.setTime)}>{calculateMinute(timeSelection.minute, +1)}</button>}

                <button className="w-[75px] py-2 rounded-lg bg-yellow-300 text-2xl">{timeSelection.minute}</button>

                {isMinuteOpen && <button className="text-lg" onClick={() => changeMinute(timeSelection.hour, timeSelection.minute, -1, context.setTime)}>{calculateMinute(timeSelection.minute, -1)}</button>}
                {isMinuteOpen && <button className="text-xs" onClick={() => changeMinute(timeSelection.hour, timeSelection.minute, -2, context.setTime)}>{calculateMinute(timeSelection.minute, -2)}</button>}
            </div>

            {/* <p>{timeSelection.hour}:{timeSelection.minute}</p> */}

            {/* <button className="ml-3 p-4 bg-red-600 rounded-xl" onClick={() => setSelectorOpen(!isSelectorOpen)}>Edit</button>

            {isSelectorOpen && <TimeSelector time={timeSelection} setTime={context.setTime}/>} */}

        </div>
    )

}

export default TimeField;