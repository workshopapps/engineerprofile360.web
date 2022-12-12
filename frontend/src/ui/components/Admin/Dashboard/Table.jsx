import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from "../../../../styles/reusableElements.styled"
import TableComponent from '../../molecules/TableComponent';
import axios from '../../../../api/axios';


function Table() {

  const  [table, setTable] = useState(null)

  useEffect(() => {
    axios.get('admin/users')
    .then(response => {
      setTable(response.data.data)
      console.log(response.data.data);
    })
    .catch(error => {
      console.log(error);
    }); 
  }, [])

  console.log(table);



  return (
    <div>
      <Containerdiv>
          <Heading>
            <Title as="h5" $size="20px" $color="#1E1E1E" $weight="700">User's Data</Title>
            <Link to='/admin/users'>View All</Link>  
          </Heading>   

          <TableComponent>
           
            <tbody>
             <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Created</th>
              </tr>

              {table?.data.map((table, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{table.name}</td>
                  <td>{table.email}</td>
                  <td>{table.company}</td>
                  <td>{(Date(table.created))}</td>                 
                </tr>
        ))}
              
            </tbody>
          </TableComponent>
          
      </Containerdiv>
    
    </div>
  )
}

export default Table

const Containerdiv = styled.div`
  margin-top:48px;
`

const Heading = styled.div`
  display:flex;
  justify-content: space-between;
`


