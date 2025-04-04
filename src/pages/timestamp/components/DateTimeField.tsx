import { Dispatch, SetStateAction } from "react";
import ScrollSelector from "../../../components/scrollSelector/ScrollSelector";
import { range } from "../../../libraries/General";
import { months } from "../../../data/Date";

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
    return(
        <div className="w-full h-fit min-h-[200px] p-5 flex flex-row rounded-xl bg-bgSecondary">
            <h2 className="text-textPrimary">Time/Date</h2>

            <ScrollSelector possibleValues={range(0, 23)} selectedValue={hour} setSelectedValue={setHour}/>
            <p className="mt-auto mb-auto mr-1 ml-1 text-3xl text-textPrimary">:</p>
            <ScrollSelector possibleValues={range(0, 59)} selectedValue={minute} setSelectedValue={setMinute}/>

            {/** Gap */}

            <ScrollSelector className="ml-auto" possibleValues={range(1, 31)} selectedValue={day} setSelectedValue={setDay}/>
            <ScrollSelector className="ml-2" possibleValues={months} selectedValue={month} setSelectedValue={setMonth}/>
            <ScrollSelector className="ml-2" possibleValues={range(2000, 2100)} selectedValue={year} setSelectedValue={setYear}/>
            {/*TODO - Make min and max year a setting */}
        </div>
    )
}

export default DateTimeField;