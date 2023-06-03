import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import InputField from './InputField';
import styles from '../styles/app.module.css';

const ViewDocuments = () => {
  return (
    <section className={`${styles.modal} ${styles.view_docs}`}>
      <div>
        <h1 className={styles.title}>투자유형 변경</h1>
        <HiXMark className={styles.xmark} />
      </div>
      <div className={styles.model_content}>
      <form>
          <InputField text={"서류"} placeholder={""} />
      </form>
      </div>
      <div className={styles.model_btns}>
        <button className={styles.save_btn} >
          download
        </button>
        <button className={styles.cancel_btn}>check</button>
      </div>
    </section>
  );
}

export default ViewDocuments;
