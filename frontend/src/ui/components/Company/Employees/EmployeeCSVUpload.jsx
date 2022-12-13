import styled from "styled-components";
import { BsCloudUpload, BsPlusCircle } from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import close from "../../../../assets/icons/close.svg";
import {
  OverlayLoader,
  Title,
} from "../../../../styles/reusableElements.styled";
import CreateEmployeeManual from "./CreateEmployeeManual";
import axios from "../../../../api/axios";
import useAuth from "../../../../hooks/useAuth";
import {
  showErrorToast,
  showSuccessToast,
  toBase64,
} from "../../../../helpers/helper";

const EmployeeCSVUpload = () => {
  const [tab, setTab] = useState("manual");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [encodedFile, setEndcodedFile] = useState("");
  const inputRef = useRef();
  const { departments } = useOutletContext();
  const [depts, setDepts] = useState([]);
  const { auth } = useAuth();
  // const navigate = useNavigate();

  //const [departments, setDepartments] = useState([]);
  const [selecteddepartment, setSelectedepartment] = useState({});
  
  //Select department event set department id
  const handleChange = (e) => {
    // localStorage.setItem("departmentsID", JSON.stringify(e.target.value));
    setSelectedepartment(e.target.value);
  };

  //File dragover event
  const handleDragOver = (e) => {
    e.preventDefault();
    //console.log(`dragover ${e}`);
  };

  //File drop event
  const handleDrop = (e) => {
    e.preventDefault();
    //console.log(`drop ${e}`);
    setFiles(e.dataTransfer.files);

    //console.log(e.dataTransfer.files[0].name);
    //console.log(e.dataTransfer.files[0]);

    /*Array.from(e.dataTransfer.files)
    .filter((file) => file.type === "text/csv")
    .forEach(async (file) => {
      const text = await file.text();
      const result =await  toBase64(file);
      console.log(btoa(text));
      
    });*/
  };

  //File convert to base64
  const handleConvertion = async () => {
    const file = files?.[0];

    try {
      const result = await toBase64(file);
      return result;
    } catch (error) {
      //console.error(`Conversion error ${error}`);
      return;
    }
  };

  //if there is a file then convert
  files &&
    handleConvertion().then((result) => {
      setEndcodedFile(result);
      //console.log(`Conversion result ${result}`);
    });

  const handleUpload = async () => {
    if (selecteddepartment!=="") {
      setLoading(true);
      try {
        const response = await axios.post(
          "employee/add?type=csv",
          JSON.stringify({
            org_id: auth.org_id,
            department_id: selecteddepartment,
            csv_file: encodedFile,
          })
        );
        if (response.data.errorState === false) {
          setLoading(false);
          // let csvtotal = response.data.data.total;
          // let csvsuccess= response.data.data.success;
          // let employeeText = csvsuccess < 2 ? "employee" : "employees";
          // let successText = csvsuccess > 0 ? "successfully" : "";
          // let csvfailed = csvtotal - csvsuccess

          showSuccessToast(
          <div>
          {response.data.message}
          {/* <br /> 
          {csvsuccess} new {employeeText} added {successText}
          <br />
          {csvfailed} entries already exists */}
          </div>);

          setTimeout(
            () =>
            window.location.href="/employees",
            1000
          );
        } else {
          showErrorToast(response.data.message);
        }
        console.log(response.data.data);
      } catch (err) {
        setLoading(false);
        if (!err.response) {
          showErrorToast("No Server Response");
        } else {
          showErrorToast(err.response?.data.message);
        }
      }
    } else {
      setLoading(false);
      showErrorToast("Please select a department");
    }
  };
  useEffect(() => {
    setDepts(departments ? departments : []);
  }, [departments]);

  return loading ? (
    <OverlayLoader contained height={100}>
      <div></div>
      <span>Just a moment...</span>
    </OverlayLoader>
  ) : (
    <>
      <Main>
        <SelectContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Title $color="#605E5C" $size="16px" $weight="400">
              Department
            </Title>
            <select value={selecteddepartment} onChange={handleChange} required>
              <option value="">Select Department</option>
              {depts
                ? depts.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))
                : ""}
            </select>
          </div>
        </SelectContainer>
        <Container>
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
                    accept=".csv"
                    onChange={(e) => setFiles(e.target.files)}
                    hidden
                    ref={inputRef}
                  />
                  <Buttons className="buttons">
                    <Link to={-1}>Cancel</Link>
                    <button onClick={() => inputRef.current.click()}>
                      <BsPlusCircle className="plus-icon" />
                      <p>Browse</p>
                    </button>
                    <button onClick={() => inputRef.current.click()}>
                      <BsPlusCircle className="mobile-icon" />
                    </button>
                  </Buttons>
                </>
              ) : (
                <NameContainer>
                  {files?.[0]?.type === "text/csv" ? (
                    <>
                      <Success>
                        <div style={{flexDirection:'column'}}>
                        <div style={{display: 'flex'}}>
                        <FaFileCsv className="icon" color="#696969" />
                        </div>
                      
                        <div style={{display: 'flex',width:'100%',justifyContent:'space-between'}}>
                        <p>{files?.[0]?.name}</p>
                        <img src={close} onClick={() => setFiles()} alt="" />
                        </div>
                        </div>
                      </Success>
                      <UploadButton>
                        <CancelButton>
                          <Link to={-1}>Cancel</Link>
                        </CancelButton>
                        <GoButton onClick={handleUpload}>Upload</GoButton>
                      </UploadButton>
                    </>
                  ) : (
                    <Error>
                      <p>Invalid File Type: Must be CSV</p>
                      <img src={close} onClick={() => setFiles()} alt="" />
                    </Error>
                  )}
                </NameContainer>
              )}
            </UploadCSVContent>
          )}
          {tab === "manual" && (
            <ManualUpload>
              <CreateEmployeeManual departmentID={selecteddepartment}/>
            </ManualUpload>
          )}
        </Container>
      </Main>
    </>
  );
};

export default EmployeeCSVUpload;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  position: relative;

  @media (max-width: 546px) {
    border-radius: 10px;
    width: 100%;
  }
`;
const Container = styled.div`
  background: #f8fbfd;
  border: 1px dashed #c7e0f4;
  border-radius: 16px;
  position: relative;
  width: 100%;
  margin: auto;

  @media (max-width: 546px) {
    border-radius: 10px;
    width: 100%;
  }
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
  display: ;

  @media (max-width: 721px) {
    height: 55px;

    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media (max-width: 546px) {
    border-top-left-radius: 10px;
  }
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
  /*border-radius: 16px 16px 0 0;*/
  cursor: pointer;
  
  @media (max-width: 721px) {
    height: 55px;

    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 546px) {
    font-size: 14px;

    border-top-right-radius: 10px;

    p {
      text-align: left;
      padding-left: 10px;
    }
  }
  }
`;

const UploadCSVContent = styled.div`
  /*height: 100%;*/
  padding:100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ;
  display: ;

  .icon {
    height: 150px;
    width: 150px;

    @media screen and (max-width: 400px) {
      height: 100px;
      margin-top: 24px;
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
  margin-top: 100px;

  a {
    gap: 8px;
    background-color: #fff !important;
    border-radius: 4px;
    padding: 12px 32px;
    cursor: pointer;
    color: #2667ff !important;
    border: 1px solid #2667ff !important;
    height: 48px;
  }

  a,
  button {
    gap: 8px;
    background-color: #2667ff;
    border-radius: 4px;
    padding: 12px 32px;
    cursor: pointer;
    color: #fff;
    height: 48px;

    .plus-icon {
      width: 24px;
      height: 24px;

      @media screen and (max-width: 400px) {
        width: 10px;
        height: 20px;
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
    border: none;
    color: #fff;

    &:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 440px) {
    a {
      width: 30%;
      display: flex;
      justify-content: center;
    }

    button {
      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        display: flex;
        justify-content: center;
        width: 30%;

        .mobile-icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

const NameContainer = styled.div`
  div {
    padding: 10px 15px;
    /*background: ${({ theme }) => theme.palette.main.primary.light};*/
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
  /*background: ${({ theme }) => theme.palette.main.primary.light};*/
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 15px;
  /*border: 1px solid ${({ theme }) => theme.palette.main.tertiary.tertiary};*/

  p {
    font-size: 16px;
    font-weight: 400;
    color: #2667ff;
  }

  img {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 10px;
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

const SelectContainer = styled.div`
  width: 20%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media screen and (max-width: 676px) {
    width: 100%;
  }

  div:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 669px) {
      padding: 0px !important;
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
    padding: 8px 10px;
    border: 1px solid #106ebe;
    border-radius: 4px;
    height: 40px;
    outline: none;
  }
`;
const UploadButton = styled.div`
  display: flex;
  width: 100%;
  margin: 46px auto;
  gap: 25px;
  height: 36px;
`;

const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.status.error.color};
  color: ${({ theme }) => theme.palette.status.error.color};
  border-radius: 3px;
  /* padding: 0 5px; */
  cursor: pointer;
  width: 76%;
  border-radius: 3px !important;
  cursor: pointer;
  height: 40px;

  a {
    color: inherit;
  }
`;

const GoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2667ff;
  color: #fff;
  cursor: pointer;
  width: 76%;
  height: 100%;
  border-radius: 3px !important;
  cursor: pointer;
  height: 40px;
`;
