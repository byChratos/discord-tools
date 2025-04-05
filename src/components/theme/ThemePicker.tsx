import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { storeValueToStore } from '../../libraries/Store';

function ThemePicker() {

    const { theme, setTheme } = useContext(ThemeContext);

    function changeTheme(to: string) {
        storeValueToStore('store.json', 'theme', to);
        setTheme(to);
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