import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { MainContainer } from "../../../styles/reusableElements.styled";
import Main from "./StyledAdminCSVUpload";

import { BsCloudUpload, BsPlusCircle } from "react-icons/bs";
import { useState } from "react";

const AdminCSVUpload = () => {

  const [isLoading, setIsLoading] = useState(false)

  const browseBtnHandler = () => {
    setIsLoading(true)
  }
  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar />
        <Main>
          
          {!isLoading && <><nav>
            <ul>
              <li>Upload CSV File</li>
              <li>Create assessment manually </li>
            </ul>
          </nav>
          <section>
            <div>
            <BsCloudUpload className="icon" color="#696969" />
            <p>Drag and drop CSV</p>
            </div>
            <div className="buttons">
              <button>Cancel</button>
              <button onClick={browseBtnHandler}><BsPlusCircle className="plus-icon" /> Browse Computer</button>
            </div>        
          </section></>}
          {isLoading && <div className="spinner">
              <div className="loader"></div>
              <p>Please wait for your file to upload </p>
            </div>}
        </Main>
      </MainContainer>
    </>
  );
};

export default AdminCSVUpload;
