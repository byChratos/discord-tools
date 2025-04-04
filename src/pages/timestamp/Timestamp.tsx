import { useEffect, useState } from "react";
import ModeField from "./components/mode/ModeField";
import modes, { Mode } from "../../data/Modes";
import { ModeContext } from "./components/mode/ModeContext";
import { Time } from "../../data/Time";
import { Date, months } from "../../data/Date";
import { invoke } from "@tauri-apps/api/core";
import Message from "./components/Message";
import DateTimeField from "./components/DateTimeField";

function Timestamp() {

    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);

    const [day, setDay] = useState<number>(1);
    const [month, setMonth] = useState<string>('January');
    const [year, setYear] = useState<number>(2000);
 
    const [mode, setMode] = useState<Mode>(modes[0]);

    const [result, setResult] = useState<String>("Generate a timestamp above!");

    // Get current time and date of users system as default values
    useEffect(() => {
        invoke<Time>('get_time')
            .then((data) => {
                setHour(data.hour);
                setMinute(data.minute);
            })
            .catch((err) => console.error('Error loading time from Rust backend:', err));

        invoke<Date>('get_date')
            .then((data) => {
                setDay(data.day);
                setMonth(months[data.month - 1]);
                setYear(data.year);
            })
            .catch((err) => console.error('Error loading date from Rust backend', err));
    }, []);

    function generateTimestamp() {
        const time: Time = {
            hour: hour,
            minute: minute
        };

        const date: Date = {
            day: day,
            month: months.indexOf(month) + 1,
            year: year
        };

        invoke<String>('generate_timestamp', { time: time, date: date, mode: mode})
            .then((response) => setResult(response));
    }

    return(
        <div className="w-full h-fit p-3 flex flex-col mt-auto mb-auto">
            <ModeContext.Provider value={{ mode, setMode }}>

                <h1 className="text-textPrimary text-5xl">Creating a Timestamp</h1>

                <DateTimeField 
                    hour={hour} setHour={setHour}
                    minute={minute} setMinute={setMinute}
                    day={day} setDay={setDay}
                    month={month} setMonth={setMonth}
                    year={year} setYear={setYear}
                />

                <ModeField />

                <button onClick={() => generateTimestamp()} className="bg-green-500 mt-2 rounded-full p-2">Generate</button>
                <Message message={result}/>
            </ModeContext.Provider>
        </div>
    )
}

export default Timestamp;