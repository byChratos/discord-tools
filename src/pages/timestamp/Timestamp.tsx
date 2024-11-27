import { useEffect, useState } from "react";
import DateField from "./components/date/DateField";
import ModeField from "./components/mode/ModeField";
import TimeField from "./components/time/TimeField";
import modes, { Mode } from "../../data/Modes";
import { ModeContext } from "./components/mode/ModeContext";
import { TimeContext } from "./components/time/TimeContext";
import { Time } from "../../data/Time";
import { DateContext } from "./components/date/DateContext";
import { Date } from "../../data/Date";
import { invoke } from "@tauri-apps/api/core";

function Timestamp() {

    const [time, setTime] = useState<Time>({ hour: 12, minute: 0 });
    const [date, setDate] = useState<Date | null>(null);
    const [mode, setMode] = useState<Mode>(modes[0]);

    // Get current time and date of users system as default values
    useEffect(() => {
        invoke<Time>('get_time')
            .then((data) => setTime(data))
            .catch((err) => console.error('Error loading time from Rust backend:', err));

        invoke<Date>('get_date')
            .then((data) => setDate(data))
            .catch((err) => console.error('Error loading date from Rust backend', err));
    }, []);

    function test() {
        invoke<Array<DayToWeekday>>('get_days_of_month', { year: 2024, month: 10 })
            .then((response) => console.log(response));
    }

    return(
        <div className="w-full h-full p-3 flex flex-col">
            <TimeContext.Provider value={{ time, setTime }}>
                <DateContext.Provider value={{ date, setDate }}>
                    <ModeContext.Provider value={{ mode, setMode }}>
                        <h1>Create a Timestamp</h1>

                        <div className="w-full h-fit flex flex-row">
                            <TimeField />
                            <DateField />
                        </div>

                        <ModeField />

                        <button onClick={() => test()} className="bg-green-500 mt-2 rounded-full p-2">Generate</button>
                    </ModeContext.Provider>
                </DateContext.Provider>
            </TimeContext.Provider>
        </div>
    )

}

export default Timestamp;