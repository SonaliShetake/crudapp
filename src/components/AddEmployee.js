import React , { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { addEmployee } from '../service/api';

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
export const AddEmployee = () => {
  const [employee, setEmployee] = useState(initialValue);
  const { firstname, lastname, email } = employee;
  let history = useHistory();
  const classes = useStyles();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setEmployee({...employee, [e.target.name]: e.target.value})
}

  const addEmployeeDetails = async() => {
    await addEmployee(employee);
    history.push('./list');
}
    return (
       <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
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
                <Button variant="contained" color="primary" onClick={() => addEmployeeDetails()}>Add User</Button>
                <Link to="/" className="btn btn-danger ml-4">Cancel</Link> 
            </FormControl>
        </FormGroup>
    
    )
}
