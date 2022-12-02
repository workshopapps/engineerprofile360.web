import React from 'react';
import {Button} from '../../../styles/reusableElements.styled';
import {Title} from '../../../styles/reusableElements.styled';
import styled, {css} from 'styled-components';
import { useState, useEffect } from 'react';
import { CreateCategory } from './CreateCategory';
import {CategoryItems} from './CategoryItems';
import axios from "../../../api/axios";



const Edit=styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:30px;
    margin-bottom:16px;

    & :nth-child(2){
        display:flex;
        gap:10px;
    }
`
const Tableheading=styled.tr`
    background: #F8FBFD;
    width:100%;
`
const CategoryTable = [
    {
        id: "1",
        category:'javascript' ,
        Numberofquestions: "105",
      },
      {
        id: "2",
        category:'CSS' ,
        Numberofquestions: "105",
      },
      {
        id: "3",
        category:'HTML' ,
        Numberofquestions: "105",
      }
]
const Categoryrows = CategoryTable.map((CategoryTable=>{
    return(
        <tr>
            <td>{CategoryTable.id}</td>
            <td>{CategoryTable.category}</td>
            <td>{CategoryTable.Numberofquestions}</td>
        </tr>
    )
}));


export const Category = () => {
    const [categoryList,setCategoryList]=useState([]);

    useEffect(() => {
        const category = async () => {
          try {
            const response = await axios.get(`/category/{category_id}`);
            setCategoryList(response.data)
} 
          catch (err) {
          }
        };
    
        category();
      }, []);


        const categoryDelete = async (category_id) => {
          try {
            const response = await axios.delete(`/category/${category_id}/delete`);
            setCategoryList(response.data)
} 
          catch (err) {
          }
        };
    


    const [isOpen,setIsOpen]=useState(false);
    const toggleCreateCategory=()=>{
        setIsOpen(!isOpen);
    };
  return (
    <>
    <Title font-size='26px' weight='600'>Categories</Title>
    <Edit>
        <div>
            <Button onClick={toggleCreateCategory} >Add New Category</Button>
        </div>
        <div>
            <Button $variant='outlined' onClick={toggleCreateCategory} >Edit</Button>
            <Button onClick={categoryDelete}>Delete</Button>
        </div>
    </Edit>
    {isOpen &&
    <CreateCategory cancel={toggleCreateCategory} />
    }
    <main>
        <table>
            <Tableheading>
                <th>#</th>
                <th>Category</th>
                <th>Number of Questions</th>
            </Tableheading>

            {Categoryrows}

        </table>
    </main>
    </>
  )
}
