import React from "react";

import styles from "./FillEmployee.module.css";
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
      <div className={styles.csv_container}>
        
        <div className={styles.Upload}>
          <form>
            <div className={styles.card_upload}>
              <div className={styles.card_upload_header}>
                <p>Upload Csv file</p>
                <p>Add Employee Manually</p>
              </div>
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
            </div> 
          </form>
        </div>
      </div>
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