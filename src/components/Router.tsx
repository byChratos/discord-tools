import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/home/Home';
import Timestamp from '../pages/timestamp/Timestamp';
import { ThemeContext } from './theme/ThemeContext';
import { useEffect, useState } from 'react';
import { getValueFromStore } from '../libraries/Store';

function Router() {

    const [theme, setTheme] = useState<string | null>('ash');

    useEffect(() => {
        getValueFromStore('store.json', 'theme').then(storeTheme => {
            if(storeTheme != undefined) {
                setTheme(storeTheme);
            }
        });
    
    }, []);

    return(
        <HashRouter>
            <ThemeContext.Provider value={{ theme, setTheme }}>
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