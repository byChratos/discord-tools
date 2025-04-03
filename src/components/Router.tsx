import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/home/Home';
import Timestamp from '../pages/timestamp/Timestamp';
import { ThemeContext } from './ThemeContext';
import { useEffect, useState } from 'react';
import { Store } from '@tauri-apps/plugin-store';
import { getStore } from '../libraries/Store';

function Router() {

    const [store, setStore] = useState<Store | null>(null);
    const [theme, setTheme] = useState<string | null>('ash');

    useEffect(() => {
        getStore(setStore, 'store.json', false);
        store?.get<string>('theme').then(storeTheme => {
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