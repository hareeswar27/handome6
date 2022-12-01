import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

function StripedRowExample() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        
          <td>Jhon</td>
          <td>26</td>
          <td>MERN</td>
          <td>October</td>
          <td><NavLink to="">Edit</NavLink></td>

        </tr>
        <tr>
         
          <td>Doe</td>
          <td>25</td>
          <td>MERN</td>
          <td>November</td>
          <td><NavLink to="">Edit</NavLink></td>


        </tr>
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}

        <tr>
        
          <td>Bidden</td>
          <td>22</td>
          <td>MERN</td>
          <td>October</td>
          <td><NavLink to="">Edit</NavLink></td>


        </tr>

        <tr>
          
          <td>Barar</td>
          <td>25</td>
          <td>MERN</td>
          <td>November</td>
          <td><NavLink to="">Edit</NavLink></td>
          
        </tr> 
        
        <tr>
          <td>Christ</td>
          <td>24</td>
          <td>MERN</td>
          <td>August</td>
          <td><NavLink to="">Edit</NavLink></td>

        </tr> 
        
        <tr>
        
          <td>Elent</td>
          <td>25</td>
          <td>MERN</td>
          <td>Thornton</td>
          <td><NavLink to="">Edit</NavLink> </td>

       
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;