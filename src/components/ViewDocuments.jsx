import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import InputField from './InputField';
import styles from '../styles/app.module.css';
import { getFilePreview } from '../utils/getFilePreview';

const ViewDocuments = ({docs, onClose}) => {
  return (
    <section className={`${styles.modal} ${styles.view_docs}`}>
      <div>
        <h1 className={styles.title}>투자유형 변경</h1>
        <HiXMark className={styles.xmark} onClick={onClose}/>
      </div>
      <div className={styles.model_content}>
      <form>
          <InputField text={"서류"} placeholder={""} />
      </form>
      <div className={styles.file_input_area}>
        {
          docs && docs.map((file, index) => {
            console.log(file);
            return (
              <li key={index}>
                {getFilePreview(file)}
              </li>
            )}
          )
        }
      </div>
      </div>
      <div className={styles.model_btns}>
        <button className={styles.save_btn} onClick={onClose} >
          download
        </button>
        <button className={styles.cancel_btn} onClick={onClose}>check</button>
      </div>
    </section>
  );
}

export default ViewDocuments;
