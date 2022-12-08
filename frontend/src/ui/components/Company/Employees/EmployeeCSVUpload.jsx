import styled from "styled-components";
import { BsCloudUpload, BsPlusCircle } from "react-icons/bs";
import { useRef, useState,useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import close from "../../../../assets/icons/close.svg";
import { Title } from "../../../../styles/reusableElements.styled";
import CreateEmployeeManual from "./CreateEmployeeManual";
//import axios from "../../../../api/axios";

const EmployeeCSVUpload = () => {
  const [tab, setTab] = useState("manual");
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const { departments } = useOutletContext();
  const [depts, setDepts] = useState([]);

  useEffect(() => {
    setDepts(departments ? departments : []);
  }, [departments]);
  
  //const [departments, setDepartments] = useState([]);
  const [selecteddepartment, setSelectedepartment] = useState({});

  const handleChange = (e) => {
    localStorage.setItem("departmentsID", JSON.stringify(e.target.value));
    setSelectedepartment(e.target.value);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
    
    console.log(e.dataTransfer.files[0].name);
    console.log(e.dataTransfer.files[0]);    

    Array.from(e.dataTransfer.files)
    .filter((file) => file.type === "text/csv")
    .forEach(async (file) => {
      const text = await file.text();
      console.log(btoa(text));
    });
  };

  return (
    <>
    <Selectontainer>
    <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "0 3rem",
          }}
        >
           <Title $color="#605E5C" $size="16px" $weight="400">
            Department
          </Title>
          <select value={selecteddepartment} onChange={handleChange} required>
          <option>Select Department</option>
          {depts
            ? depts.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))
            : ""}
          </select>

        </div>
    </Selectontainer>
   
      <Main>
        <CreateTypeContainer>
          <Upload
            onClick={() => setTab("upload")}
            className={tab === "upload" ? "active" : ""}
          >
            <p>Upload CSV file</p>
          </Upload>
          <Manual
            onClick={() => setTab("manual")}
            className={tab === "manual" ? "active" : ""}
          >
            <p>Add employee manually</p>
          </Manual>
        </CreateTypeContainer>
        {tab === "upload" && (
          <UploadCSVContent onDragOver={handleDragOver} onDrop={handleDrop}>
            {!files || files?.[0] === undefined ? (
              <>
                <BsCloudUpload className="icon" color="#696969" />
                <p>Drag and drop CSV</p>
                <input
                  type="file"
                  onChange={(e) => setFiles(e.target.files)}
                  hidden
                  ref={inputRef}
                />
                <Buttons className="buttons">
                  <Link to={-1}>Cancel</Link>
                  <button onClick={() => inputRef.current.click()}>
                    <BsPlusCircle className="plus-icon" />
                    <p>Browse Computer</p>
                  </button>
                </Buttons>
              </>
            ) : (
              <NameContainer>
                {files?.[0]?.type === "text/csv" ? (
                  <Success>
                    <p>{files?.[0]?.name}</p>
                    <img src={close} onClick={() => setFiles({})} alt="" />
                  </Success>
                ) : (
                  <Error>
                    <p>Invalid File Type: Must be CSV</p>
                    <img src={close} onClick={() => setFiles({})} alt="" />
                  </Error>
                )}
              </NameContainer>
            )}
          </UploadCSVContent>
        )}
        {tab === "manual" && (
          <ManualUpload>
            <CreateEmployeeManual />
          </ManualUpload>
        )}
      </Main>
    </>
  );
};

export default EmployeeCSVUpload;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  background: #f8fbfd;
  border: 1px dashed #c7e0f4;
  margin: auto;
  border-radius: 16px;
  position: relative;
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

    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

const Upload = styled.div`
  width: 100%;
  text-align: center;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 16px;
  border: 1px solid #c7e0f4;
  cursor: pointer;
  display:none;
`;

const Manual = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  border: 1px solid #c7e0f4;
  border-top-right-radius: 16px;
  border-radius: 16px 16px 0 0;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const UploadCSVContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  display:none;

  .icon {
    height: 150px;
    width: 150px;

    @media screen and (max-width: 400px) {
      height: 100px;
    }
  }
`;


const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 200px;

  
  a,
  button {
    gap: 8px;
    background-color: #2667ff;
    border-radius: 4px;
    padding: 12px 32px;
    cursor: pointer;

    .plus-icon {
      width: 24px;
      height: 24px;

      @media screen and (max-width: 400px) {
        width: 15px;
        height: 24px;
      }
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ebf4f9;

      @media screen and (max-width: 400px) {
        font-size: 13px;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-items: center;
  }
`;

const NameContainer = styled.div`
  div {
    padding: 10px 15px;
    background: ${({ theme }) => theme.palette.main.primary.light};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 15px;

    p {
      font-size: 16px;
      font-weight: 400;
    }

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
`;

const Success = styled.div`
  padding: 10px 15px;
  background: ${({ theme }) => theme.palette.main.primary.light};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 15px;
  border: 1px solid ${({ theme }) => theme.palette.main.tertiary.tertiary};

  p {
    font-size: 16px;
    font-weight: 400;
    color: #2667ff;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const Error = styled.div`
  padding: 10px 15px;
  background: ${({ theme }) => theme.palette.main.primary.light};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 15px;
  border: 1px solid ${({ theme }) => theme.palette.status.error.color};

  p {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.status.error.color};
  }
`;

const ManualUpload = styled.div``;

const Selectontainer = styled.div`
  width: 50%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 19px 5px;

  @media screen and (max-width: 676px) {
    width:100%
  }    

  div:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 669px) {
        padding: 0px 1rem !important;
      }  

    h1 {
      color: #323130;
      font-size: 22px;
      font-weight: 400;

      @media screen and (max-width: 450px) {
        font-size: 14px;
        text-align: left;
      }
      
       

    }
  }

  div:nth-child(2) {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  select {
    width: 100%;
    padding: 0 10px;
    border: 1px solid #106ebe;
    border-radius: 2px;
    height: 40px;
    outline: none;
  }
`;
