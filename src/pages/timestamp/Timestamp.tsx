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
import Message from "./components/Message";

function Timestamp() {

    const [time, setTime] = useState<Time | null>(null);
    const [date, setDate] = useState<Date | null>(null);
    const [mode, setMode] = useState<Mode>(modes[0]);

    const [result, setResult] = useState<String>("Generate a timestamp above!");

    // Get current time and date of users system as default values
    useEffect(() => {
        invoke<Time>('get_time')
            .then((data) => setTime(data))
            .catch((err) => console.error('Error loading time from Rust backend:', err));

        invoke<Date>('get_date')
            .then((data) => setDate(data))
            .catch((err) => console.error('Error loading date from Rust backend', err));
    }, []);

    function generateTimestamp() {
        invoke<String>('generate_timestamp', { time: time, date: date, mode: mode})
            .then((response) => setResult(response));
    }

    return(
        <div className="w-full h-fit p-3 flex flex-col mt-auto mb-auto">
            <TimeContext.Provider value={{ time, setTime }}>
                <DateContext.Provider value={{ date, setDate }}>
                    <ModeContext.Provider value={{ mode, setMode }}>
                        <h1>Create a Timestamp</h1>

                        <div className="w-full h-fit flex flex-row">
                            <TimeField />
                            <DateField />
                        </div>

                        <ModeField />

                        <button onClick={() => generateTimestamp()} className="bg-green-500 mt-2 rounded-full p-2">Generate</button>
                        <Message message={result}/>
                    </ModeContext.Provider>
                </DateContext.Provider>
            </TimeContext.Provider>
        </div>
    )

    {/* Popup Coming from the bottom like a page kinda? */}

}

export default Timestamp;