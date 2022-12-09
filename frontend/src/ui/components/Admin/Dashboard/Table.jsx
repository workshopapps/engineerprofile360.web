import React from 'react'
import styled from 'styled-components';

function Table() {
  return (
    <div>
      <Containerdiv>
      <Heading>
        <Title>User's Data</Title>
        <Button>View All</Button>  
      </Heading>   
        
       
        <Tablecontent>

          <Thead>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Created</th>
          </Thead>


          <Tr>
            <Td>1</Td>           
            <Tdd> <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1670484347/Avatar-removebg-preview_zvngln.png" alt="avatar"/>  <Span>Precious Arnold</Span> </Tdd>
            <Td>Eval360@axle.com</Td>
            <Td>Eval360</Td>
            <Td>21/12/2022</Td>
          </Tr>
        </Tablecontent> 
          
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

const Title = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #1E1E1E;
`

const Button = styled.h5`
  font-family: 'Inter';
  cursor:pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  text-align: right;
  text-decoration-line: underline;
  color: #1E1E1E;
`

// const Tablecontent = styled.table`
//   margin-top:20px;  
//   width: 100%;
//   border-collapse: collapse; 
//   overflow-x:hidden;
// `


// const Thead = styled.tr `
//   height: 37px;
//   background: #F8FBFD;
//   border-radius: 4px;
// `

// const Tr = styled.tr`
//   margin-top:18px;
// `

// const Td = styled.td`
//   text-align: center;
//   place-items: center;
//   justify-content:center;
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 22px;
//   color: #605E5C;
//   margin-top:8px;
// `

// const Tdd = styled.td`
//   text-align: center;
//   place-items: center;
//   justify-content:center;
//   display:flex;
//   gap:10px;
//   margin-top:8px;
// `

// const Span = styled.span`
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 24px;
//   color: #605E5C;
// `