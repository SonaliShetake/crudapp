import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})



export const Heading = () => {
    const classes = useStyle();
    return (
<AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="list" exact>Employee List</NavLink>
               <NavLink className={classes.tabs} to="add" exact>Add User</NavLink>
            </Toolbar>
        </AppBar>
      
      
    )
}
