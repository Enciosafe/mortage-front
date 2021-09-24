import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import s from "./Appbar.module.css"

const Appbar = () => {
    return (
        <div>
            <ul className={s.container}>
                <li><Button className={s.btn}><NavLink className={s.navItem} to={'/banks'}>BANKS</NavLink></Button></li>
                <li><Button className={s.btn}><NavLink className={s.navItem} to={'/add'}>ADD BANK</NavLink></Button></li>
            </ul>
        </div>
    );
};

export default Appbar;