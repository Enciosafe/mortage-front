import React from 'react';
import {NavLink} from "react-router-dom";

const Appbar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/banks'}>BANKS</NavLink></li>
                <li><NavLink to={'/add'}>ADD BANK</NavLink></li>
                <li><NavLink to={'/calculator'}>CALCULATOR</NavLink></li>

            </ul>
        </div>
    );
};

export default Appbar;