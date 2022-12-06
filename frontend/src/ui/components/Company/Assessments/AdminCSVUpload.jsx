import styled from "styled-components";
import { BsCloudUpload, BsPlusCircle } from "react-icons/bs";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import close from "../../../../assets/icons/close.svg";

import CreateManual from "../../CreateAssessment/CreateManual";

const AdminCSVUpload = () => {
  const [tab, setTab] = useState("upload");
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
  };

  console.log(files?.[0]);

  return (
    <>
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
            <p>Create assessment manually</p>
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
                {files?.[0]?.type === "CSV" ? (
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
            <CreateManual />
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
  width: 90%;
  height: 100vh;
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
`;

const UploadCSVContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;

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
