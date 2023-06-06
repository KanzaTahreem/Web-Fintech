import React, {useState} from 'react';
import Checkbox from './Checkbox';
import styles from '../styles/app.module.css';
import modalStyles from '../styles/app.module.css';
import { useDispatch } from 'react-redux';
import { selectUnSelectApplication } from '../redux/applicationsDataReducer';
import CustomTooltip from './CustomTooltip';
import { Modal } from './Modal';
import Container from './Container';
import RegisterReason from './RegisterReason';
import ViewDocuments from './ViewDocuments';

const TableRow = ({ item, displayPopup, closePopup, selectAll }) => {
  const { serial, previousType, applicationType, docs, applicationDate, approvalStatus, reason, approvalDate, admin, checked } = item;
  const dispatch = useDispatch();
  const [modal, setModal] = useState(<></>);

  const handleCheckboxChange = () => {
    if (approvalStatus !== '승인거부' && approvalStatus !== '승인완료') {
      dispatch(selectUnSelectApplication({
        checked: !checked,
        serial
      }));
    }
  };

  const onClose = () => {
    setModal(<></>);
  };

  const openDocs = (docs) => {
    setModal(
      <Modal>
        <Container>
          <ViewDocuments docs={docs} onClose={onClose} />
        </Container>
      </Modal>
    );
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
      const message = approvalStatus === '승인완료' ? 'You are already an approved member.' : 'You have already been denied approval.';
      displayPopup(message, closePopup, null)
    } else {
      handleCheckboxChange();
    }
  }

  const closeRegisterReason = () => {
    setModal(<></>);
  };

  const openDeniedReasonsComponent = () => {
    setModal(
      <Modal>
        <Container>
          <RegisterReason onClose={closeRegisterReason} openReason={serial} />
        </Container>
      </Modal>
    )
  }

  const ApprovalStatusComponent = ({approvalStatus}) => (<p data-tooltip-id={"row-tooltip"+serial}>
    <CustomTooltip id={"row-tooltip"+serial} text="Check details" onClick={openDeniedReasonsComponent} >
      <div>{approvalStatus}</div>
    </CustomTooltip>
  </p>);
  return (
    <tr className={styles.customer}>
      <td className={styles.checkbox}>
        <Checkbox
          label=""
          checked={checked || selectAll}
          onChange={onCheckBoxChange}
          getClassName={getClassNameForCheckbox}
        />
      </td>
      <td className={styles.serial}>{serial}</td>
      <td>{previousType}</td>
      <td>{applicationType}</td>
      <td className={styles.docs} onClick={() => openDocs(docs)}><span>보기</span></td>
      <td className={styles.date}>{applicationDate}</td>
      <td className={getClassName()}><span>{
        approvalStatus === '승인거부' ? <ApprovalStatusComponent approvalStatus={approvalStatus}/>: approvalStatus
        }</span></td>
      <td className={styles.reason}>{reason}</td>
      <td className={styles.date}>{approvalDate}</td>
      <td>{admin}</td>
      {modal}
    </tr>
  );
};

export default TableRow;
