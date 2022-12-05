import React from "react";
import UploadHeader from "./CsvHeader";
import styles from "./Csv.module.css";
import { MainContainer } from "../../../styles/reusableElements.styled";
// import Header from "../../components/Header";
// import Sidebar from "../../components/Sidebar";
import upload_success from "./assets/upload_success.svg";

export default function CsvUploadingComplete() {
  return (
    <>
      {/* <Header /> */}
      <MainContainer>
        {/* <Sidebar /> */}
        <div className={styles.csv_container}>
          <UploadHeader />

          <div className={styles.Upload}>
            <form>
              <div className={styles.card_upload}>
                <div className={styles.card_upload_area}>
                  <img src={upload_success} alt="upload" />
                  <p className={styles.text_success}>Successfully Uploaded</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
