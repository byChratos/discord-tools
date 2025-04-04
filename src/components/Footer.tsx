import { checkForAppUpdates } from "../libraries/Update";

function Footer() {
    return(
        <div className="w-full h-fit flex flex-row bg-bgSecondary p-2">
            <button onClick={() => checkForAppUpdates(true)} className="text-textSecondary">Check for Update</button>
            <p className="text-textSecondary mx-2">/</p>
        </div>
    )
}

export default Footer;