import { checkForAppUpdates } from "../../libraries/Update";
import { version } from "../../../package.json";

function Home() {

    return(
        <div className="w-full h-full">
            <p>Home Page {version}</p>
            <button onClick={() => checkForAppUpdates(true)}>Check for Update</button>
        </div>
    )

}

export default Home;