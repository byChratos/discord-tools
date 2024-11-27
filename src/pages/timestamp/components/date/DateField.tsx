import { useContext } from "react";
import { DateContext, DateContextType } from "./DateContext";
import { Date } from "../../../../data/Date";
import DatePicker from "./DatePicker";

function DateField() {

    const context: DateContextType | null = useContext(DateContext);
    const dateSelection: Date | null | undefined = context?.date;

    

    if(context == null  || dateSelection == undefined || dateSelection == null) {
        //TODO Error Handler
        return(
            <p>ERROR</p>
        )
    }

    function setDay(day: number) {
        const newDate: Date = {
            day: day,
            month: dateSelection?.month || 1,
            year: dateSelection?.year || 2025
        };

        context?.setDate(newDate);
    }

    function setMonth(month: number) {
        const newDate: Date = {
            day: dateSelection?.day || 1,
            month: month,
            year: dateSelection?.year || 2025
        };

        context?.setDate(newDate);
    }

    function setYear(year: number) {
        const newDate: Date = {
            day: dateSelection?.day || 1,
            month: dateSelection?.month || 1,
            year: year
        };

        context?.setDate(newDate);
    }

    return(
        <div className="w-full h-fit p-5 rounded-xl bg-red-300 ml-2">

            <DatePicker date={dateSelection} setDate={context.setDate} />

            {/* <DropDownMenu selectedValue={dateSelection.day} values={[...Array(31).keys()]} onSelect={setDay}/>

            <DropDownMenu selectedValue={dateSelection.month} values={[...Array(31).keys()]} onSelect={setMonth}/>

            <DropDownMenu selectedValue={dateSelection.year} values={[...Array(31).keys()]} onSelect={setYear}/> */}
        </div>
    )

}

export default DateField;