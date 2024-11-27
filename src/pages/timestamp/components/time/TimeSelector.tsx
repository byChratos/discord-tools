import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Time } from "../../../../data/Time";

function TimeSelector({time, setTime}: { time: Time, setTime: Dispatch<SetStateAction<Time | null>>}) {
    
    function changeTime(hour: number, minute: number) {
        const newTime: Time = {
            hour: time.hour + hour,
            minute: time.minute + minute
        };
        setTime(newTime);
    }
    
    function handleHourChange(e: ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.target.value);

        if(!isNaN(value) && value >= 0 && value <= 23) {
            const newTime: Time = {
                hour: value,
                minute: time.minute
            }
            setTime(newTime);
        }
    }

    return(
        <div className="w-[250px] h-min p-4 flex flex-row bg-orange-500">
            <div className="h-min p-3 flex flex-col border border-solid border-purple-500">
                <button onClick={() => changeTime(1, 0)}> up </button>
                
                <input
                    type="number"
                    value={time.hour}
                    onChange={handleHourChange}
                    min={0}
                    max={23}>
                </input>

                {time.hour}
                <button onClick={() => changeTime(-1, 0)}> down </button>
            </div>
            <div className="h-min p-3 flex flex-col border border-solid border-purple-500">
                <button onClick={() => changeTime(0, 1)}> up </button>
                {time.minute}
                <button onClick={() => changeTime(0, -1)}> down </button>
            </div>
        </div>
    )
}

export default TimeSelector;