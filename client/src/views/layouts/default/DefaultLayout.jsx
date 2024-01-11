import { Outlet } from "react-router-dom";
import classes from './style.module.css'

export default function (){
    return (
        <div className={classes.delaultLayout} >
            <Outlet />
        </div>
    )
}