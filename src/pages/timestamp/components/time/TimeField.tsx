import { useContext, useState } from "react";
import { TimeContext, TimeContextType } from "./TimeContext";
import { Time } from "../../../../data/Time";
import TimeSelector from "./TimeSelector";

function TimeField() {

    const context: TimeContextType | null = useContext(TimeContext);
    const timeSelection: Time | null | undefined = context?.time;

    const [isSelectorOpen, setSelectorOpen] = useState<Boolean>(false);

    if(context == null  || timeSelection == undefined || timeSelection == null) {
        //TODO Error Handler
        return(
            <p>ERROR</p>
        )
    }

    return(
        <div className="w-full h-fit p-5 flex flex-row rounded-xl bg-red-300 mr-2">
            
            <p>{timeSelection.hour}:{timeSelection.minute}</p>

            <button className="ml-3 p-4 bg-red-600 rounded-xl" onClick={() => setSelectorOpen(!isSelectorOpen)}>Edit</button>

            {isSelectorOpen && <TimeSelector time={timeSelection} setTime={context.setTime}/>}

        </div>
    )

}

export default TimeField;