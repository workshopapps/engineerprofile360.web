import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from "../../../../styles/reusableElements.styled"
import TableComponent from '../../molecules/TableComponent';

function Table() {

  // const  [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get('admin/overview')
  //   .then(response => {
  //     setData(response.data.data)
  //     console.log(response.data.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   }); 
  // }, [])

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

              <tr>
                <td>1</td>
                <td>Precious</td>
                <td>Eval360@gmail.com</td>
                <td>Eval360</td>
                <td>21/12/2022</td>
              </tr>
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

// const Title = styled.h3`
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 20px;
//   line-height: 36px;
//   color: #1E1E1E;
// `

