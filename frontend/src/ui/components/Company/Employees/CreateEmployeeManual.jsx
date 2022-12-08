import React, { useEffect, useState } from "react";
import { Link, useNavigate,useOutletContext } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import styled from "styled-components";
import axios from "../../../../api/axios";
import { Loader,Title } from "../../../../styles/reusableElements.styled";
import { toast } from "react-toastify";

const CreateEmployeeManual = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [selecteddepartment, setSelectedepartment] = useState([]);
    const [departments, setDepartments] = useState([]);
    const { auth }  = useAuth();
    const org_id = auth.org_id;
    const navigate = useNavigate();
    const departmentid = localStorage.getItem("departmentsID");
    
    const handleChange = (e) => {
      //console.log(e.target.id);
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    
    const onBlur = (e) => {
      setTouched((prevState) => ({
        ...prevState,
        [e.target.id]: true,
      }));
    };

    const validate = (formData) => {
      const error = {};
      const validemail = new RegExp( /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
     
      if (!formData.username) {
        error.username = "Please enter your username";
      }
  
      if (!formData.email) {
        error.email = "Please enter your email";
      } else if(!validemail.test(formData.email)){
        error.email = "Please enter a valid email";
      }

      if (!formData.fullname) {
        error.fullname = "Please enter your fullname";
      }

     if (!departmentid) {
        // toast.error("Please select a department");
         error.dept = "Please select a department";
       }
  
      setErrors(error);
    };

    useEffect(() => {
      validate(formData);
    }, [formData, touched]);
  
    const onNextPage = async (formData) => {
      validate(formData);
  
      if (Object.keys(errors).length > 0) {
        setTouched({
          fullname: true,
          username: true,
          email: true,
          dept: true,
        });
      }
  
      if (Object.keys(errors).length === 0) {
        setTouched({
          name: false,
          username: false,
          email: false,
          dept: false,
        });
      }
  
      if (Object.keys(errors).length === 0) {
        setLoading(true);
        axios.post("employee/add?type=manual",
            {   
                org_id:org_id,
                department_id:departmentid,
                fullname:formData.fullname, 
                username :formData.username,
                email:formData.email
            }
        )
        .then((res) => {  
          toast.success(res.data.message);
          setLoading(false);
          localStorage.removeItem('departmentsID');
          setTimeout(
            () => navigate("/employees/"), 
            5000
          );
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
          setLoading(false);
        });
      }
    };
  
    const { fullname, username, email } = formData;
  return loading ? (
    <Load>
      <Loader />
    </Load>
  ) :(
    
    <CreateEmployeeManualContainer>
      <InputItemContainer>
        <InputItem>
          <label>Employee Name</label>
          <input
            id="fullname"
            type="text"
            placeholder="Fullname"
            onChange={handleChange}
            value={fullname}
            onBlur={onBlur}
          />
          {errors.fullname && touched.fullname && <span>{errors.fullname}</span>}
        </InputItem>
        <InputItem>
          <label>Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={username}
            onBlur={onBlur}
          />
          {errors && errors.username && touched.username && <span>{errors.username}</span>}
        </InputItem>

        <InputItem>
          <label>Employee Email</label>
          <input
            id="email"
            type="email"
            placeholder="youra@email.com"
            onChange={handleChange}
            value={email}
            onBlur={onBlur}
          />
          {errors && errors.email && touched.email && <span>{errors.email}</span>}
          {errors && errors.dept && touched.dept && <span>{errors.dept}</span>}
        </InputItem>
      </InputItemContainer>
      <Buttons>
        <Link to={-1}>Cancel</Link>
        <button

          onClick={() => onNextPage(formData)}
        >
          Submit
        </button>
      </Buttons>
    </CreateEmployeeManualContainer>
  );
};

export default CreateEmployeeManual;

const CreateEmployeeManualContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 30px auto;
  gap: 15px;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #323130;
    opacity: 0.6;
  }
`;
const InputItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #605e5c;
    margin-bottom: 20px;
  }

  select,
  input {
    border: 1px solid #106ebe;
    border-radius: 2px;
    height: 40px;
    outline: none;
  }

  select {
    color: #605e5c;
  }

  input {
    padding-left: 5px;

    ::placeholder {
      color: #605e5c;
    }
  }

  input[type="date"] {
    color: #605e5c;
  }

  span {
    padding-top: 5px;
    color: ${({ theme }) => theme.palette.status.error.color};
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: auto;

  a,
  button {
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 32px;
    cursor: pointer;
  }

  a {
    border: 1px solid #2667ff;
    color: #2667ff;
  }

  button {
    background: #2667ff;
    color: #ebf4f9;
  }

  @media (max-width: 802px) {
    width: 100%;
    margin: auto;
  }

  @media (max-width: 669px) {
    a {
      font-size: 14px;
      padding: 10px 18px;
    }
  }
`;

export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:100vh
`;