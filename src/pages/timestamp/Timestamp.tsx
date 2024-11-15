import DateField from "./components/DateField";
import ModeField from "./components/mode/ModeField";
import TimeField from "./components/TimeField";

function Timestamp() {

    return(
        <div className="w-full h-full p-3 flex flex-col">
            <h1>Create a Timestamp</h1>
            <p>Timestamp Page</p>

            <div className="w-full h-fit flex flex-row">
                <TimeField />
                <DateField />
            </div>

            <ModeField />

            <button className="bg-green-500 mt-2 rounded-full p-2">Generate</button>
        </div>
    )

}

export default Timestamp;