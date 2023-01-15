import styled from "styled-components";
import { BsCloudUpload, BsPlusCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  fileToBase64,
  showErrorToast,
  showSuccessToast,
  toBase64,
} from "../../../../helpers/helper";

import close from "../../../../assets/icons/close.svg";

import CreateManual from "./CreateAssessment/CreateManual";
import axios from "../../../../api/axios";
import useAuth from "../../../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import PageInfo from "../../molecules/PageInfo";
import { Loader } from "../../../../styles/reusableElements.styled";

const AdminCSVUpload = () => {
  const [tab, setTab] = useState("upload");
  const [files, setFiles] = useState(null);
  const [encodedFile, setEndcodedFile] = useState("");
  const inputRef = useRef();
  const { auth } = useAuth();
  const location = useLocation();
  const [uploadLoader, setUploadLoader] = useState(false);

  console.log("assessmentID", location?.state?.data);

  const navigate = useNavigate();

  useEffect(() => {
    if (!location?.state?.data) {
      navigate("/assessment/create-assessment");
    }
  }, []);

  window.history.replaceState({}, document.title);

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log(e);
    setFiles(e.dataTransfer.files);
  };

  const handleConvertion = async () => {
    const file = files?.[0];
    try {
      const result = await toBase64(file);
      return result;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  files &&
    handleConvertion().then((result) => {
      setEndcodedFile(result);
      console.log(result);
    });

  const handleUpload = async () => {
    setUploadLoader(true);
    try {
      const response = await axios.post(
        "question/add_csv",
        JSON.stringify({
          org_id: auth.org_id,
          assessment_id: location.state.data,
          base64: encodedFile,
        })
      );
      console.log("response", response.data);
      console.log("location", location?.state?.data);
      showSuccessToast("CSV Uploaded successfully");
      setUploadLoader(false);
      navigate(`/assessment/view-assessment/${location?.state?.data}`);
    } catch (err) {
      if (!err.response) {
        showErrorToast("No Server Response");
      } else {
        showErrorToast(err.response?.data?.message);
      }
    }
  };

  return (
    <>
      <PageInfo
        breadcrumb={["Assessment", "Create Assessment"]}
        pageTitle="Create Assessment"
      />
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
            <p>Create Assessment</p>
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
                      <p>{files?.[0]?.name}</p>
                      <img src={close} onClick={() => setFiles({})} alt="" />
                    </Success>
                    <UploadButton>
                      <CancelButton>
                        <Link to={-1}>Cancel</Link>
                      </CancelButton>
                      <GoButton onClick={handleUpload}>
                        {uploadLoader ? <Loader sm /> : "Upload"}
                      </GoButton>
                    </UploadButton>
                  </>
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
            <CreateManual assessment_id={location.state?.data} />
          </ManualUpload>
        )}
      </Main>
    </>
  );
};

export default AdminCSVUpload;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #f8fbfd;
  border: 1px dashed #c7e0f4;
  margin: auto;
  border-radius: 16px;
  position: relative;

  @media (max-width: 546px) {
    width: 100%;
    border-radius: 10px;
    height: 80vh;
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

    @media screen and (max-width: 400px) {
      font-size: 11px;
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
  cursor: pointer;

  @media (max-width: 721px) {
    height: 55px;

    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media (max-width: 546px) {
    border-top-right-radius: 10px;

    p {
      text-align: left;
      padding-left: 10px;
    }
  }
`;

const UploadCSVContent = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #000;

  .icon {
    height: 100px;
    width: 100px;

    @media (max-width: 400px) {
      margin-top: 24px;
      height: 100px;
    }
  }

  @media (max-width: 400px) {
    .icon {
      height: 100px;
      width: 100px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;

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

      @media (max-width: 400px) {
        width: 10px;
        height: 20px;
      }
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ebf4f9;
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
  width: 60%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Success = styled.div`
  padding: 10px 15px;
  background: ${({ theme }) => theme.palette.main.primary.light};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    cursor: pointer;
  }
`;

const Error = styled.div`
  padding: 10px 15px;
  background: ${({ theme }) => theme.palette.main.primary.light};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border: 1px solid ${({ theme }) => theme.palette.status.error.color};

  p {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.status.error.color};
  }

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const ManualUpload = styled.div``;

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
  width: 50%;
  height: 100%;
  border-radius: 3px;
  /* padding: 0 5px; */
  cursor: pointer;

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
  width: 50%;
  height: 100%;
  border-radius: 3px;
  /* padding: 0 5px; */
  cursor: pointer;
`;
