import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/home/Home';
import Timestamp from '../pages/timestamp/Timestamp';
import { ThemeContext } from './ThemeContext';

function Router() {

    return(
        <HashRouter>
            <ThemeContext.Provider value={"light"}>
                <Layout>
                    <Routes>
                        <Route index path="/" element={<Home />}/>
                        <Route path="/timestamp" element={<Timestamp />}/>
                    </Routes>
                </Layout>
            </ThemeContext.Provider>
        </HashRouter>
    )

}

export default Router;