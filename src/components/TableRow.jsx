import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddReason from './AddReason';
import ViewDocuments from './ViewDocuments';
import Modal from '../helpers/Modal';
import Checkbox from '../helpers/Checkbox';
import Container from '../helpers/Container';
import CustomTooltip from '../helpers/CustomTooltip';
import { PENDING, DENIED, APPROVED } from '../utils/constants';
import { toggleApplicationCheck } from '../redux/applicationData/actions';
import { ALREADY_APPROVED, ALREADY_DENIED } from '../utils/messages';
import styles from '../styles/app.module.css';

const TableRow = ({
  item, displayPopup, closePopup, selectAll,
}) => {
  const {
    serial, previousType, applicationType, docs, applicationDate, approvalStatus, reason, approvalDate, admin, checked,
  } = item;
  const dispatch = useDispatch();
  const [modal, setModal] = useState(<></>);

  const closeModal = () => {
    setModal(<></>);
  };

  const openModal = (component) => {
    setModal(
      <Modal>
        <Container>{component}</Container>
      </Modal>,
    );
  };

  const openDocs = (docs) => {
    openModal(<ViewDocuments docs={docs} onClose={closeModal} />);
  };

  const openCheckReason = () => {
    openModal(<AddReason onClose={closeModal} openReason={serial} />);
  };

  const checkboxDisabled = () => approvalStatus === DENIED || approvalStatus === APPROVED;

  const onCheckBoxChange = () => {
    if (checkboxDisabled()) {
      const message = approvalStatus === APPROVED
        ? ALREADY_APPROVED
        : ALREADY_DENIED;
      displayPopup(message, closePopup, null);
    } else {
      dispatch(
        toggleApplicationCheck({
          checked: !checked,
          serial,
        }),
      );
    }
  };

  const getClassName = (approvalStatus, styles) => {
    let className = styles.approval;
    className += approvalStatus === PENDING ? ` ${styles.waiting}` : '';
    className += approvalStatus === DENIED ? ` ${styles.denied}` : '';
    className += approvalStatus === APPROVED ? ` ${styles.approved}` : '';
    return className;
  };

  const getClassNameForCheckbox = () => {
    if (checkboxDisabled()) {
      return styles.disabled;
    }
    return `${checked ? styles.checked : ''} ${styles.checkbox}`;
  };

  const ApprovalStatusComponent = () => (
    <p data-tooltip-id={`row-tooltip${serial}`}>
      <CustomTooltip id={`row-tooltip${serial}`} text="Check details" onClick={openCheckReason}>
        <div>{approvalStatus}</div>
      </CustomTooltip>
    </p>
  );

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
      <td
        className={styles.docs}
        onClick={() => openDocs(docs)}
        onKeyDown={() => null}
        role="gridcell"
        tabIndex="0"
      >
        <span>보기</span>
      </td>
      <td className={styles.date}>{applicationDate}</td>
      <td className={getClassName(approvalStatus, styles)}>
        <span>
          {
            approvalStatus === DENIED ? <ApprovalStatusComponent approvalStatus={approvalStatus} /> : approvalStatus
          }
        </span>
      </td>
      <td className={styles.reason}>{reason}</td>
      <td className={styles.date}>{approvalDate}</td>
      <td>{admin}</td>
      {modal}
    </tr>
  );
};

export default TableRow;
