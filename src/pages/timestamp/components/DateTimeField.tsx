import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ScrollSelector from "../../../components/scrollSelector/ScrollSelector";
import { getNumberOfMonth, range } from "../../../libraries/General";
import { months } from "../../../data/Date";
import { invoke } from "@tauri-apps/api/core";

function DateTimeField({
    hour, setHour,
    minute, setMinute,
    day, setDay,
    month, setMonth,
    year, setYear
}: {
    hour: number, setHour: Dispatch<SetStateAction<number>>,
    minute: number, setMinute: Dispatch<SetStateAction<number>>,
    day: number, setDay: Dispatch<SetStateAction<number>>,
    month: string, setMonth: Dispatch<SetStateAction<string>>,
    year: number, setYear: Dispatch<SetStateAction<number>>
}) {

    const [daysOfMonth, setDaysOfMonth] = useState<number>(31);

    // Recalculate amount of days the month has
    useEffect(() => {
        invoke<number>('get_days_count_of_month', { month: getNumberOfMonth(month), year: year })
            .then((response) => {
                setDaysOfMonth(response);
                if(day > response) {
                    setDay(response);
                }
            });
    }, [month]);

    return(
        <div className="h-fit w-full flex flex-row">
            <div className="w-full h-fit min-h-[200px] p-5 flex flex-row rounded-xl bg-bgSecondary mr-2 items-center">
                <h2 className="text-textPrimary text-3xl">Time</h2>

                <div className="flex flex-1 justify-center items-center">
                    <div className="flex flex-row">
                        <ScrollSelector possibleValues={range(0, 23)} selectedValue={hour} setSelectedValue={setHour}/>
                        <p className="mt-auto mb-auto mr-1 ml-1 text-3xl text-textPrimary">:</p>
                        <ScrollSelector possibleValues={range(0, 59)} selectedValue={minute} setSelectedValue={setMinute}/>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit min-h-[200px] p-5 flex flex-row rounded-xl bg-bgSecondary ml-2 items-center">
                <h2 className="text-textPrimary text-3xl">Date</h2>

                <div className="flex flex-1 justify-center items-center">
                    <div className="flex flex-row">
                        <ScrollSelector possibleValues={range(1, daysOfMonth)} selectedValue={day} setSelectedValue={setDay}/>
                        <ScrollSelector className="ml-2" possibleValues={months} selectedValue={month} setSelectedValue={setMonth}/>
                        <ScrollSelector className="ml-2" possibleValues={range(2000, 2100)} selectedValue={year} setSelectedValue={setYear}/>
                    </div>
                </div>
                {/*TODO - Make min and max year a setting */}
            </div>
        </div>
    )
}

export default DateTimeField;