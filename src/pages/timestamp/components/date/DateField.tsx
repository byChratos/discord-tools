import { useContext, useState } from "react";
import { DateContext, DateContextType } from "./DateContext";
import { Date } from "../../../../data/Date";
import DatePicker from "./DatePicker";

function DateField() {

    const context: DateContextType | null = useContext(DateContext);
    const dateSelection: Date | null | undefined = context?.date;

    const [isCalendarOpen, setCalendarOpen] = useState<Boolean>(false);

    if(context == null  || dateSelection == undefined || dateSelection == null) {
        //TODO Error Handler
        return(
            <p>ERROR</p>
        )
    }

    return(
        <div className="w-full h-fit min-h-[150px] p-5 flex flex-row rounded-xl bg-red-300 ml-2">

            <p> {dateSelection.day}.{dateSelection.month}.{dateSelection.year} </p>

            <button className="ml-3 p-4 bg-red-600 rounded-xl" onClick={() => setCalendarOpen(!isCalendarOpen)}>Edit</button>

            {isCalendarOpen && <DatePicker date={dateSelection} setDate={context.setDate} />}
        
        </div>
    )

}

export default DateField;