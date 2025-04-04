import { version } from "../../../package.json";
import ThemePicker from "../../components/theme/ThemePicker";

function Home() {

    return(
        <div className="w-full h-full">
            <p>Home Page {version}</p>
            <ThemePicker />
        </div>
    )

}

export default Home;