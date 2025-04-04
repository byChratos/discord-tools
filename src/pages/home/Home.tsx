import { checkForAppUpdates } from "../../libraries/Update";
import { version } from "../../../package.json";
import ThemePicker from "../../components/ThemePicker";

function Home() {

    return(
        <div className="w-full h-full">
            <p>Home Page {version}</p>
            <ThemePicker />
            <button onClick={() => checkForAppUpdates(true)}>Check for Update</button>
        </div>
    )

}

export default Home;