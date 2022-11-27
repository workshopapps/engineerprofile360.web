import pointer from "./assets/pointer.png";
import styles from "./Csv.module.css";

export default function UploadHeader() {
  return (
    <>
      <div className={styles.Filter_wrapper}>
        <div className={styles.Filter_nav}> 
        <div className={styles.Filter_nav_text}><h5>Dashboard</h5><img src={pointer} alt="arrow-right-pointer" /><h5>Assessment</h5><img src={pointer} alt="arrow-right-pointer" /><h4>Add Assessment</h4></div>
        <div><p>Add Assessment</p></div>
        </div>
        </div>

    </>
  );
}
