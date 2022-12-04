import React from 'react'
import styled, {css} from 'styled-components';
import {Button} from '../../../styles/reusableElements.styled';
import { useState, useEffect } from 'react';
import { CategoryItems } from './CategoryItems';
import axios from "../../../api/axios";

const Wrapper =styled.div`
height: 100vh;
top:0;
left: 0;
z-index: 100;
position: absolute;
width: 100vw;
display:grid;
justify-content:center;
align-items:center;

`
const Card=styled.div`
    background: #F8FBFD;   
    border: 1px solid #C7E0F4;
    padding: 32px 55px;
    gap: 32px;
    display:grid;
    z-index: 150;


    h2{
        font-weight: 400;
        font-size: 18px;
        color: #323130;
    }
`
const Buttons =styled.div`
    display:flex;
    justify-content:space-between;
`
const Input = styled.div`
    display=grid;
    input{
        width:100%;
        padding: 6px 8px;
        margin-bottom:30px;
        background: #FFFFFF;
        border: 1px solid #106EBE;
        border-radius: 2px;
    }
`

export const CreateCategory = (props) => {
    const [category, setCategory]= useState('');
    const [categoryName, setCategoryName]= useState('');
    // const [assessmentId, setAssessmentId]= useState('');


    
    
    
    function submitHandler(e){
        e.preventDefault();
        setCategory('');
        // console.log(categoryName)
        const CreateCategories = async () => {
            try {
              const response = await axios.post(
                  "/category/add",
                  JSON.stringify({ categoryName })
                );
                console.log(response)
            } catch (err) {
              
            }
          }
       CreateCategories();
          

    }
    // useEffect(() => {

    //     CreateCategories();
    //   }, [categoryName , assessmentId]);
  return (

    <>
        <Wrapper>
            <Card>
                <h2>Create new category</h2>
                <form onSubmit={submitHandler}>
                    <Input>
                        <label htmlFor="text">Title</label>
                        <input type="text" name="text" id="" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
                        {/* <input type="text" name="text" id="" value={assessmentId} onChange={(e)=>setAssessmentId(e.target.value)}/>
                        <select value={assessmentId} onChange={(e)=>setAssessmentId(e.target.value)}>
                            <option value="1">PHP</option>
                            <option value="2" >Laravel</option>
                            <option value="3">React</option>
                            </select> */}
                    </Input>
                    < Buttons>
                        <Button onClick={props.cancel} $variant='outlined' >Cancel</Button>
                        <Button type='submit' >Proceed</Button>
                    </Buttons>
                </form>
            </Card>
        </Wrapper>
    </>
  )
}
