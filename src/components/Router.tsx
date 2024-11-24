import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/home/Home';
import Timestamp from '../pages/timestamp/Timestamp';

function Router() {

    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route index path="/" element={<Home />}/>
                    <Route path="/timestamp" element={<Timestamp />}/>
                </Routes>
            </Layout>
        </HashRouter>
    )

}

export default Router;