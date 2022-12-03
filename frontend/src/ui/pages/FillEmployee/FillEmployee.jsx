import React from "react";

import { MainContainer } from "../../../styles/reusableElements.styled";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";



export default function Fillemployee() {
  return (
    <>
    <Header />
    <MainContainer>
      <Sidebar />
      <Container>
        
        <Upload>
          <form>
            <CardUpload>
              <UploadHeader>
                <p>Upload Csv file</p>
                <p>Add Employee Manually</p>
              </UploadHeader>
              <div className={styles.card_form_area}>
                <span>Input assessment and select response type below:</span>
              </div>
            <div className="container">
            <InputContainer>
                <label htmlFor="name">Employee Name</label>
                <div>
                    <input id="fullname" type="text" placeholder="Full Name" />
                </div>
            </InputContainer>
            <InputContainer>
                    <label htmlFor="username">Username</label>
                <div>
                    <input id="username" type="text" placeholder="Username"/>
                </div>
            </InputContainer>
            <InputContainer>
                <label htmlFor="email">Employee Email</label>
                <div>
                    <input id="email" type="text" placeholder="Johndoes@domain"/>
                </div>
            </InputContainer>
            <InputContainer>
                <label htmlFor="department">Department</label>
                <div>
                    <input id="department" type="text" placeholder="Department"/>
                </div>
            </InputContainer>
            </div>
              <div className={styles.Filter_Next_Submit}>
              <button type="button" className={styles.Button_next}>Cancel</button>
              <button
                type="button"
                className={styles.Button_submit}>Submit</button>
            </div>
            </CardUpload> 
          </form>
        </Upload>
      </Container>
    </MainContainer></>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
  background: #FFFFFF;
  margin:10px;
  
  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #605E5C;
    padding-top: 5px
    
    
  }
  div {
    height: 40px;
    width: 95%;
    background: #ffffff;
    border: 1px solid #106EBE;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:10px;
    
    input {
      width: 100%;
      outline: none;
      padding-left: 10px
      
    }
    @media (max-width: 495px) {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
  @media (max-width: 389px) {
    label {
      font-size: 14px;
    }
  }
`;

const Container = styled.div`
height: auto;
width: 80%;
margin:40px auto;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 40px;
padding: 40px;
color:#323130;
  
`;
const Upload = styled.div`
display: flex;
width: 100%!important;
flex-direction: column;

p{
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
}
label{
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #201F1E;
    padding-left: 10px;
}
div{
    margin-bottom: 40px;
}
  
`;

const CardUpload = styled.div`
    background: #F8FBFD;
    border: 1px dashed #C7E0F4;
    border-radius: 16px;
    min-height: 70vh;
    justify-content: center;
    align-items: center;
  
`;

const UploadHeader = styled.div`
    display: flex;
    width: 100%;

    p{
    padding: 16px;
    flex-basis:100%;
    text-align: center;
    }

    p:nth-child(1){
    color: #323130;
    background-color: #F8FBFD;
    border-radius: 0 16px 0 0;
    }
    
    p:nth-child(2){
    background-color: #2667FF;
    border: 1px solid #586279;
    border-radius: 16px 0 0 0;
    color: #FFFFFF;
    }
    
`;


