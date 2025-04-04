import { load, Store } from '@tauri-apps/plugin-store';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemePicker() {

    const [store, setStore] = useState<Store | null>(null);
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        load('store.json', { autoSave: false }).then(loadedStore => {
            setStore(loadedStore);
        });
    }, []);

    function changeTheme(to: string) {
        store?.set('theme', to).then(() => {
            store.save().then(() => {
                setTheme(to);
            });
        });
    }

    return(
        <div>
            <p className='text-red-500'>Current Theme: {theme}</p>
            <button className="text-red-500" onClick={() => changeTheme('light')}>Light</button>
            <button className="text-red-500" onClick={() => changeTheme('ash')}>Ash</button>
            <button className="text-red-500" onClick={() => changeTheme('dark')}>Dark</button>
            <button className="text-red-500" onClick={() => changeTheme('onyx')}>Onyx</button>
        </div>
    )
}

export default ThemePicker;