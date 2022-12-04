import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MainContainer } from "../../../styles/reusableElements.styled";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";
import axios from "../../../api/axios";




export default function Fillemployee() {
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [id, setId] = useState('') 
  
  useEffect (()=>{
    let ids=localStorage.getItem("departments") 
    setId(ids)
    axios.get(`https://api.eval360.hng.tech/api/department/${ids}`).then((response)=>{
      console.log(response)
      setDepartment(response?.data?.data?.name || {})
    }).catch((error)=>{
      console.log(error)
    })
  },[]) 
  const showErrorToast = (error) => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const [tab, setTab] = useState("head");

  const showSuccess = (error) => {
    toast.success(error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleSubmit = (e) => {
    axios.post(`https://api.eval360.hng.tech/api/employee/add?type=manual`,{
      email: email,
      username: userName,
      department_id: id,
      fullname: fullName
    }).then((response)=>{
      setEmail('')
      setUserName('')
      setDepartment('')
      setFullName('')
      console.log(response)
      showSuccess('Employee Added Successfully')
    }).catch((error)=>{
      console.log(error)
      showErrorToast(error)
    })
  }
  return (
    <>
    <Header />
    <MainContainer>
      <Sidebar />
      <Container>
        
        <Upload>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <Card>
              
              <CreateTypeContainer>
          <Head
            onClick={() => setTab("head")}
            className={tab === "head" ? "active" : ""}
          >
            <p>Upload CSV file</p>
          </Head>
          <Add
            onClick={() => setTab("add")}
            className={tab === "add" ? "active" : ""}
          >
            <p>Add Employee Manually</p>
          </Add>
        </CreateTypeContainer>
        <Area>
            <span>Input assessment and select response type below:</span>
        </Area>
            <Main>
            <InputContainer>
                <label htmlFor="fullname">Employee Name</label>
                <div>
                    <input id="fullname" type="text" placeholder="Full Name" name="fullname" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                </div>
            </InputContainer>
            <InputContainer>
                    <label htmlFor="username">Username</label>
                <div>
                    <input id="username" type="text" placeholder="Username" name="username"  value={userName} onChange={(e)=>setUserName(e.target.value)} />
                </div>
            </InputContainer>
            <InputContainer>
                <label htmlFor="email">Employee Email</label>
                <div>
                    <input id="email" type="text" placeholder="Johndoes@domain" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
            </InputContainer>
            <InputContainer>
                <label htmlFor="department">Department</label>
                <div>
                    <input id="department" type="text" placeholder="Department" name="department_id"  value={department} disabled={true} />
                </div>
            </InputContainer>
            </Main>
              <Filter>
                <Button1>
              <button type="button">Cancel</button>
              </Button1>
              <Button2>
              <button
                type="Submit"
                >Submit</button>
                </Button2>
            </Filter>
            </Card> 
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

@media screen and (max-width: 767px) {
      
      text-align: center;
      width: 100%;
    Filter{
      width: 100%;
      
    }
    
  }
  @media (max-width: 495px) {
    width: 100%;
    align-item: center;
    input {
      width: 100%;
    }
}
@media (max-width: 389px) {
  label {
    font-size: 14px;
  }
}
}
`;
const Upload = styled.div`
    display: flex;
    width: 100%!important;
    flex-direction: column;

p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
}
label {
    
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #201F1E;
    padding-left: 10px;
    }
input[type=radio]{
    margin-left: 10px;
    }

 div{
    margin-bottom: 40px;
    } 
`;

const Card = styled.div`
    background: #F8FBFD;
    border: 1px dashed #C7E0F4;
    border-radius: 16px;
    min-height: 70vh;
    justify-content: center;
    align-items: center;

`;

const Area = styled.div`
    padding-left: 10px;
    color: #323130;
    font-size: 18px;

`;

const Filter = styled.div`
    display: flex;
    width: 100%!important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    flex-wrap: wrap;

    @media (max-width: 389px) {
        Filter{
         display: flex;
         align-Item: center;
         flex-direction: row;
         width: 100%
         flex-wrap: wrap;

        }
      }
`;
const Button1 = styled.div`
    margin: 0 20px;
    padding: 12px 32px;
    height: 48px;
    background-color: #FFFFFF;
    border: 1px solid #2667FF;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #2667FF;
    cursor: pointer;

`;

const Button2 = styled.div`
    display: flex;
    margin: 0 20px;
    padding: 12px 32px;
    height: 48px;
    background-color: #2667FF;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;

`;
const Main = styled.div`
    padding-right: 50px;

`;
const CreateTypeContainer = styled.div`
  width: 100%;
  display: flex;

  & .active {
    background: #2667ff;
    border: 1px solid #2667ff;
  }

  & .active p {
    color: #ffffff;
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #323130;
  }
`;

const Head = styled.div`
  width: 100%;
  text-align: center;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 16px;
  border: 1px solid #c7e0f4;
  cursor: pointer;
`;

const Add = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  border: 1px solid #c7e0f4;
  border-top-right-radius: 16px;
  cursor: pointer;
`;

