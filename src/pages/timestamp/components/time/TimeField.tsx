import { useContext, useState } from "react";
import { TimeContext, TimeContextType } from "./TimeContext";
import { Time } from "../../../../data/Time";
import { changeHour, changeMinute, nextHour, nextMinute, previousHour, previousMinute } from "../../../../data/TimeLib";

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
        <div className="w-full h-fit p-5 flex flex-row rounded-xl bg-red-300 mr-2">

            <div 
                onMouseEnter={() => setHourOpen(true)}
                onMouseLeave={() => setHourOpen(false)}
                onWheel={handleHourScroll}
                className="h-full flex flex-col"
            >
                {isHourOpen && <button onClick={() => changeHour(timeSelection.hour, timeSelection.minute, +1, context.setTime)}>{nextHour(timeSelection.hour)}</button>}
                
                <button className="w-[75px] py-2 rounded-lg bg-yellow-300">{timeSelection.hour}</button>
                
                {isHourOpen && <button onClick={() => changeHour(timeSelection.hour, timeSelection.minute, -1, context.setTime)}>{previousHour(timeSelection.hour)}</button>}
            </div>

            <div className="w-[10px]"></div>

            <div
                onMouseEnter={() => setMinuteOpen(true)}
                onMouseLeave={() => setMinuteOpen(false)}
                onWheel={handleMinuteScroll}
                className="h-full flex flex-col"
            >
                {isMinuteOpen && <button onClick={() => changeMinute(timeSelection.hour, timeSelection.minute, +1, context.setTime)}>{nextMinute(timeSelection.minute)}</button>}

                <button className="w-[75px] py-2 rounded-lg bg-yellow-300">{timeSelection.minute}</button>

                {isMinuteOpen && <button onClick={() => changeMinute(timeSelection.hour, timeSelection.minute, -1, context.setTime)}>{previousMinute(timeSelection.minute)}</button>}
            </div>

            {/* <p>{timeSelection.hour}:{timeSelection.minute}</p> */}

            {/* <button className="ml-3 p-4 bg-red-600 rounded-xl" onClick={() => setSelectorOpen(!isSelectorOpen)}>Edit</button>

            {isSelectorOpen && <TimeSelector time={timeSelection} setTime={context.setTime}/>} */}

        </div>
    )

}

export default TimeField;