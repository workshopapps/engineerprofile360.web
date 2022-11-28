import React from "react";
import UploadHeader from "./CsvHeader";
import styles from "./Csv.module.css";
import { MainContainer } from "../../../styles/reusableElements.styled";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import loading from "./assets/loading.svg";


export default function CsvUploading() {
  return (
    <>
    <Header />
    <MainContainer>
      <Sidebar />
      <div className={styles.csv_container}>
        <UploadHeader />

        <div className={styles.Upload}>
          <form>
            <div className={styles.card_upload}>
              
              <div className={styles.card_upload_area}>
                <img src={loading} alt="upload"/>
                <p>Please wait for your file to upload</p>
              </div>
            </div> 
          </form>
        </div>
      </div>
    </MainContainer></>
  );
}
