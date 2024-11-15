import ModeButton from "./ModeButton"

function ModeField() {

    const modes = [{ name: "Default", flag: "DO_NOT_SET" }, { name: "Short Time", flag: "t" }, { name: "Long Time", flag: "T" }, { name: "Short Date", flag: "d" }, { name: "Long Date", flag: "D" }, { name: "Short Date/Time", flag: "f" }, { name: "Long Date/Time", flag: "F" }, { name: "Relative Time", flag: "R" }]

    return(
        <div className="w-full h-fit p-5 flex rounded-xl bg-red-300 mt-2">
            <div className="w-fit h-fit ml-auto mr-auto">
                {modes.map((mode, index) => (
                    <ModeButton name={mode.name} className={index != 0 ? `ml-2` : ``}/>
                ))}
            </div>
            {/*TODO Select One Menu */}
        </div>
    )

}

export default ModeField;