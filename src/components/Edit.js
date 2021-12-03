import React from 'react';
import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getEmployees, editEmployee } from '../service/api';

const initialValue = {
    firstname: '',
    lastname: '',
    email: '',
   
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})


export const Edit = () => {

    const [employee, setEmployee] = useState(initialValue);
    const { firstname, lastname, email } = employee;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadEmployeeDetails();
    });

    const loadEmployeeDetails = async() => {
        const response = await getEmployees(id);
        setEmployee(response.data);
    }

    const editEmployeeDetails = async() => {
        await editEmployee(id, employee);
        history.push("./list" );
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setEmployee({...employee, [e.target.name]: e.target.value})
    }


    return (
        <FormGroup className={classes.container}>
        <Typography variant="h4">Edit Employee Information</Typography>
        <FormControl>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='firstname' value={firstname} id="my-input" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Last Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='lastname' value={lastname} id="my-input" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
        </FormControl>
       
        <FormControl>
            <Button variant="contained" color="primary" onClick={() => editEmployeeDetails()}>Edit </Button>
           
        </FormControl>
    </FormGroup>

    )
}
