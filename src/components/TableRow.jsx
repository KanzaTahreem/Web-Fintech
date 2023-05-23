import React from 'react';
import styles from '../styles/dashboard.module.css';

const TableRow = ({ item }) => {
  const { serial, previousType, applicationType, docs, applicationDate, approvalStatus, reason, approvalDate, admin } = item;

  const getClassName = () => {
    if (approvalStatus === '승인대기') {
      return `${styles.approval} ${styles.waiting}`;
    } else if (approvalStatus === '승인거부') {
      return `${styles.approval} ${styles.denied}`;
    } else if (approvalStatus === '승인완료') {
      return `${styles.approval} ${styles.approved}`;
    }
    return styles.approval;
  };

  return (
    <tr className={styles.customer}>
      <td className={styles.checkbox}><span /></td>
      <td className={styles.serial}>{serial}</td>
      <td>{previousType}</td>
      <td>{applicationType}</td>
      <td className={styles.docs}><span>{docs}</span></td>
      <td className={styles.date}>{applicationDate}</td>
      <td className={getClassName()}><span>{approvalStatus}</span></td>
      <td className={styles.reason}>{reason}</td>
      <td className={styles.date}>{approvalDate}</td>
      <td>{admin}</td>
    </tr>
  );
};

export default TableRow;
