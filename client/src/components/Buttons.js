import React from "react";
import { useDarkMode } from "./hooks/useDarkMode";

const Buttons = () => {

    const [darkMode, setDarkMode] = useDarkMode(false);
  
    const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

    return (
        <div>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </div>
    )
}

export default Buttons;