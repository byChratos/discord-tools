import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Date } from "../../../../data/Date";
import { invoke } from "@tauri-apps/api/core";
import { weekdays } from "../../../../data/Weekdays";

function DatePicker({ date, setDate }: { date: Date, setDate: Dispatch<SetStateAction<Date | null>> }) {

    const [displayYear, setDisplayYear] = useState<number>(date.year);
    const [displayMonth, setDisplayMonth] = useState<number>(date.month);
    const [dayWeekdayMap, setDayWeekdayMap] = useState<Array<DayToWeekday>>([{ day: 1, weekday: 1 }]);


    useEffect(() => {
        invoke<Array<DayToWeekday>>('get_days_of_month', { year: date.year, month: date.month })
            .then((response) => {setDayWeekdayMap(response)});
    }, []);

    useEffect(() => {
        console.log("New Month: " + displayMonth + " and New Year: " + displayYear);
        recalculateWeekdays();
    }, [displayMonth, displayYear]);

    function recalculateWeekdays() {
        invoke<Array<DayToWeekday>>('get_days_of_month', { year: displayYear, month: displayMonth })
            .then((response) => {
                setDayWeekdayMap(response);
                console.log(response);
            });
    }

    function changeDisplayYear(modifier: number) {
        setDisplayYear(displayYear + modifier);
    }

    function changeDisplayMonth(modifier: number) {

        // Month overflow: 12 -> 1 and Year + 1
        if(displayMonth == 12 && modifier > 0) {
            setDisplayMonth(1);
            changeDisplayYear(1);
            return;
        }

        // Month "under"flow?: 1 -> 12 and Year - 1
        if(displayMonth == 1 && modifier < 0) {
            setDisplayMonth(12);
            changeDisplayYear(-1);
            return;
        }

        setDisplayMonth(displayMonth + modifier);
    }

    return(
        <div className="w-[250px] h-min p-4 flex flex-col bg-orange-500">
            <div className="w-full h-min flex flex-row">
                {/* Year */}
                <button className="ml-auto" onClick={() => changeDisplayYear(-1)}> - </button>
                <p className="ml-4 mr-4"> {displayYear} </p>
                <button className="mr-auto" onClick={() => changeDisplayYear(1)}> + </button>
            </div>
            <div className="flex flex-row">
                {/* Month */}
                <button className="ml-auto" onClick={() => changeDisplayMonth(-1)}> - </button>
                <p className="ml-4 mr-4" > {displayMonth} </p>
                <button className="mr-auto" onClick={() => changeDisplayMonth(1)}> + </button>
            </div>
            <div className="w-full flex flex-col">
                {/* Days */}
                <div className="grid grid-cols-7 bg-slate-400">
                    {weekdays.map((day) => (
                        <div className="border border-solid border-red-600" key={day}>
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7">
                    {/* Empty Weekdays at beginning of month */}
                    {Array.from({ length:  dayWeekdayMap[0].weekday - 1}).map((_, index) => (
                        <div key={`empty-${index}`} className="border border-solid border-red-600 bg-black"></div>
                    ))}

                    {dayWeekdayMap.map((dayObject) => (
                        <div key={dayObject.day} className="border border-solid border-red-600">
                            {dayObject.day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DatePicker;