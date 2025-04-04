import { useEffect, useState } from "react";
import modes, { getModeFlagFromName, Mode } from "../../data/Modes";
import { Time } from "../../data/Time";
import { Date, months } from "../../data/Date";
import { invoke } from "@tauri-apps/api/core";
import DateTimeField from "./components/DateTimeField";
import GenerateButton from "./components/GenerateButton";
import ModeField from "./components/ModeField";

function Timestamp() {

    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);

    const [day, setDay] = useState<number>(1);
    const [month, setMonth] = useState<string>('January');
    const [year, setYear] = useState<number>(2000);
 
    const [mode, setMode] = useState<string>(modes[0].name);

    //const [mode, setMode] = useState<Mode>(modes[0]);

    const [result, setResult] = useState<string | null>(null);

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

        const selectedMode: Mode = {
            name: mode,
            flag: getModeFlagFromName(mode),
        }

        invoke<string>('generate_timestamp', { time: time, date: date, mode: selectedMode})
            .then((response) => setResult(response));
    }

    return(
        <div className="w-full h-fit p-3 flex flex-col mt-auto mb-auto">
            <h1 className="text-textPrimary text-5xl">Creating a Timestamp</h1>

            <DateTimeField 
                hour={hour} setHour={setHour}
                minute={minute} setMinute={setMinute}
                day={day} setDay={setDay}
                month={month} setMonth={setMonth}
                year={year} setYear={setYear}
            />

            <ModeField selectedMode={mode} setSelectedMode={setMode}/>

            <GenerateButton result={result} setResult={setResult} onClick={generateTimestamp}/>
        </div>
    )
}

export default Timestamp;