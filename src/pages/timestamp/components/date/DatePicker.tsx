import { Dispatch, SetStateAction, useState } from "react";
import { Date } from "../../../../data/Date";
import { invoke } from "@tauri-apps/api/core";


function DatePicker({ date, setDate }: { date: Date, setDate: Dispatch<SetStateAction<Date>> }) {

    const [displayYear, setDisplayYear] = useState<number>(date.year);
    const [displayMonth, setDisplayMonth] = useState<number>(date.month);

    function changeDisplayYear(modifier: number) {

        setDisplayYear(displayYear + modifier);
    }

    function changeDisplayMonth(modifier: number) {

        invoke('get_days_of_month', { year: displayYear, month: displayMonth })
            .then((response) => console.log(response));

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
        <div className="w-[250px] h-[150px] p-4 flex flex-col bg-orange-500">
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
            <div>
                {/* Days */}
            </div>
        </div>
    );
}

export default DatePicker;