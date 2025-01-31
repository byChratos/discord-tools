import { checkForAppUpdates } from "../../libraries/Update";

function Home() {

    return(
        <div className="w-full h-full">
            <p>Home Page</p>
            <button onClick={() => checkForAppUpdates(true)}></button>
        </div>
    )

}

export default Home;