import { Home } from './components/Home';
import { AddEmployee} from './components/AddEmployee';
import { Edit } from './components/Edit';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {EmployeeList} from './components/EmployeeList';



function App() {
  return (
    <div >
      <BrowserRouter>
        
        <Switch>
        
          < Route exact path="/" component={Home } / >
           
          < Route path="/add"  component={AddEmployee } / >
          < Route path="/list"  component={EmployeeList } / >
           
          < Route path="/edit/:id"  component={Edit } / >
           
         
     

        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
