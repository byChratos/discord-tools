import { load, Store } from '@tauri-apps/plugin-store';
import { useEffect, useState } from 'react';

function ThemePicker() {

    const [store, setStore] = useState<Store | null>(null);

    useEffect(() => {
        async function getStore() {
            const loadedStore = await load('store.json', { autoSave: false });
            setStore(loadedStore);
        }

        getStore();
    }, []);

    function setTheme(to: string) {
        store?.set('theme', to);
        store?.save();
    }

    return(
        <div>
            <button className="text-white" onClick={() => setTheme('light')}>Light</button>
            <button className="text-white" onClick={() => setTheme('ash')}>Ash</button>
            <button className="text-white" onClick={() => setTheme('dark')}>Dark</button>
            <button className="text-white" onClick={() => setTheme('onyx')}>Onyx</button>
        </div>
    )
}

export default ThemePicker;