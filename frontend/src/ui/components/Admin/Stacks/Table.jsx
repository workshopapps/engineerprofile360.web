import React from 'react'
import styled from "styled-components";
import { Button, Title } from "../../../../styles/reusableElements.styled";
import TableComponent from '../../molecules/TableComponent'
function Table() {
  return (
    <div>
        <Title as="h4" $size="28px" $color="#1E1E1E" $weight="600">Stacks</Title>

        <Button>Add New Stacks</Button> 

        <TableComponent>
           
            <tbody>
             <Tr>
                <th>#</th>
                <th>Stacks</th>
                <th>Name of questions</th>             
              </Tr>

              <tr>
                <td>1</td>
                <td>ee</td>
                <td>oopp </td>
              </tr>
            </tbody>
          </TableComponent>
    </div>
  )
}

export default Table

const Tr = styled.tr`
  justify-content:space-between;
`
