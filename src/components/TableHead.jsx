import React from 'react';
import styles from '../styles/dashboard.module.css';

const TableHead = () => {
  return (
    <thead>
      <tr className={styles.labels}>
        <th className={styles.checkbox}></th>
        <th className={styles.serial}>NO</th>
        <th>기존유형</th>
        <th>신청유형</th>
        <th>제출서류</th>
        <th className={styles.date}>신청일시</th>
        <th>승인여부</th>
        <th className={styles.reason}>승인거부 사유</th>
        <th className={styles.date}>승인일시</th>
        <th>관리자</th>
      </tr>
    </thead>
  );
};

export default TableHead;
