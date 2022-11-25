import React from "react";
import UploadHeader from "./CsvHeader";
import styles from "./Csv.module.css";
import { MainContainer } from "../../../styles/reusableElements.styled";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import upload from "./assets/upload.svg";
import addcircle from "./assets/add-circle.svg";


export default function Csvupload() {
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
              <div className={styles.card_upload_header}>
                <p>Upload Csv file</p>
                <p>Create assessment manually </p>
              </div>
              <div className={styles.card_upload_area}>
                <img src={upload} alt="upload"/>
                <p>Drag and drop CSV</p>
              </div>
              <div className={styles.Filter_Next_Submit}>
              <button type="button" className={styles.Button_next}>Cancel</button>
              <button
                type="button"
                className={styles.Button_submit}><img src={addcircle} alt="upload"/> Browse Computer</button>
            </div>
            </div> 
          </form>
        </div>
      </div>
    </MainContainer></>
  );
}
