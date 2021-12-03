import React ,{useEffect,useState} from 'react';
import { getEmployees,deleteEmployee } from '../service/api';
import { Table, TableHead, TableCell, Button, TableRow, TableBody, makeStyles } from '@material-ui/core';
import { Link,useHistory} from 'react-router-dom';

const useStyle=makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

export const EmployeeList = () => {
    const [employees,setEmployees]=useState([]);
    const classes=useStyle();
    const history=useHistory();

    useEffect(()=>{
    getEmployeeList();
    },[]);

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getEmployeeList ();
    } 

    const getEmployeeList= async()=>{
      let response=  await getEmployees();
     
      setEmployees(response.data);
    }
    return (
        <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.thead}>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email Id</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {employees.map((employee) => (
                <TableRow className={classes.row}  key={employee._id} >
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.firstname}</TableCell>
                    <TableCell>{employee.lastname}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                 <TableCell>
                 <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${employee._id}`}>Edit</Button>
                    <Button color="secondary" variant="contained" onClick={() => deleteEmployeeData(employee._id)}>Delete</Button> 
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}
