import React from 'react';
import Checkbox from './Checkbox';
import styles from '../styles/dashboard.module.css';
import modalStyles from '../styles/modal.module.css';
import { useDispatch } from 'react-redux';
import { selectUnSelectApplication } from '../redux/clientsDataReducer';

const TableRow = ({ item, displayPopup, closePopup, key }) => {
  const { serial, previousType, applicationType, docs, applicationDate, approvalStatus, reason, approvalDate, admin, checked } = item;
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    if (approvalStatus !== '승인거부' && approvalStatus !== '승인완료') {
      dispatch(selectUnSelectApplication({
        checked: !checked,
        serial
      }));
    }
  };

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

  const checkboxDisabled = () => approvalStatus === '승인거부' || approvalStatus === '승인완료';
  const getClassNameForCheckbox = () => {
    if ( checkboxDisabled() ) {
      return modalStyles["disabled"];
    }
    return `${checked ? modalStyles["checked"] : ""} ${modalStyles.checkbox}`;
  }

  const onCheckBoxChange = (e) => {
    if (checkboxDisabled()) {
      const message = approvalStatus === '승인완료' ? '이미 승인 완료된 회원입니다.' : '이미 승인 거부된 회원입니다';
      displayPopup(message, closePopup, null)
    } else {
      handleCheckboxChange();
    }
  }

  return (
    <tr className={styles.customer} key={key}>
      <td className={styles.checkbox}>
        <Checkbox
          label=""
          checked={checked}
          onChange={onCheckBoxChange}
          getClassName={getClassNameForCheckbox}
        />
      </td>
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
