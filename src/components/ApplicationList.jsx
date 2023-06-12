import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateApprovalStatus,
  updateFilter,
  updateLimit,
  updateSortOrder,
} from '../redux/applicationData/actions';
import Modal from '../helpers/Modal';
import Container from '../helpers/Container';
import Dropdown from './Dropdown';
import ChangeInvestment from './ChangeInvestment';
import AddReason from './AddReason';
import ApplicationsTable from './ApplicationsTable';
import {
  APPROVED,
  DENIED,
  PENDING,
  TABS,
  FILTER_OPTIONS,
} from '../utils/constants';
import {
  SAVED,
  NO_SELECTED_APPLICATION,
  CHANGE_APPROVAL_STATUS,
} from '../utils/messages';
import styles from '../styles/app.module.css';

const ApplicationList = ({ displayPopup, closePopup }) => {
  const approvalStatus = [APPROVED, DENIED];

  const [modal, setModal] = useState(<></>);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [prevSelectedStatus, setPrevSelectedStatus] = useState(null);
  const [filteredDropdown, setFilteredDropdown] = useState(FILTER_OPTIONS.map(() => null));
  const applicationsData = useSelector((state) => state.applicationsData.filteredData);
  const dispatch = useDispatch();

  const getApplicationsDataChecked = () => (applicationsData ? applicationsData.filter((client) => client.checked) : []);

  const handleSave = (e) => {
    e.preventDefault();
    if (applicationsData && getApplicationsDataChecked().length) {
      displayPopup(SAVED, closePopup, null);
      return;
    }
    displayPopup(NO_SELECTED_APPLICATION, closePopup, null);
  };

  const closeAddReason = () => {
    setSelectedStatus('승인상태 변경');
    setPrevSelectedStatus(null);
    setModal(<></>);
  };

  const closeChangeInvestment = () => {
    setModal(<></>);
  };

  const dispatchApprovalStatusUpdate = (i, status, reasonOfDenial, memberNumber, memberName) => {
    dispatch(updateApprovalStatus({
      serial: i,
      approvalStatus: status,
      approvalDate: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString()}`,
      reasonOfDenial,
      memberNumber,
      memberName,
    }));
  };

  const updateAllSelected = (reasonOfDenial, memberNumber, memberName) => {
    getApplicationsDataChecked().forEach((application) => {
      dispatchApprovalStatusUpdate(application.serial, selectedStatus, reasonOfDenial, memberNumber, memberName);
    });
  };

  const openModal = (name) => {
    if (name === 'ChangeInvestment') {
      setModal(
        <Modal>
          <Container>
            <ChangeInvestment onClose={closeChangeInvestment} />
          </Container>
        </Modal>,
      );
    } else if (name === 'AddReason') {
      const chckedApplications = applicationsData.filter((item) => item.checked);
      const initialMemberName = chckedApplications.map((item) => item.name).join(',');
      const initialMemberNumber = chckedApplications.map((item) => item.number).join(',');
      setModal(
        <Modal>
          <Container>
            <AddReason
              onClose={closeAddReason}
              onApproval={updateAllSelected}
              openReason={-1}
              initialMemberName={initialMemberName}
              initialMemberNumber={initialMemberNumber}
            />
          </Container>
        </Modal>,
      );
    }
  };

  const updateSelectedItemAndClose = (changeItem) => {
    if (changeItem) {
      if (selectedStatus === approvalStatus[1]) {
        openModal('AddReason');
      } else {
        updateAllSelected();
      }
      setPrevSelectedStatus(selectedStatus);
    } else {
      setSelectedStatus(prevSelectedStatus);
    }
    closePopup();
  };

  useEffect(() => {
    if (selectedStatus) {
      if (prevSelectedStatus) {
        if (selectedStatus !== prevSelectedStatus) {
          displayPopup(
            CHANGE_APPROVAL_STATUS,
            () => updateSelectedItemAndClose(true),
            () => updateSelectedItemAndClose(false),
          );
        }
      } else {
        setPrevSelectedStatus(selectedStatus);
      }
    }
  }, [selectedStatus]);

  const getPendingStatusCount = () => {
    if (applicationsData) {
      return <span>{`${applicationsData.filter((client) => client.approvalStatus === PENDING).length}`}</span>;
    }
    return 0;
  };

  return (
    <section className={styles.application_list}>
      {modal}
      <div className={styles.upper_row}>
        <h1 className={styles.headline}>
          회원상세
          {' '}
          <span className={styles.req} />
          <span>필수항목</span>
        </h1>
        <div className={styles.tabs}>
          {TABS.map((tab, index) => (
            <p className={styles.tab} key={index}>
              {tab}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.middle_row}>
        <div className={styles.upper_middle_row}>
          <h2 className={styles.headline}>
            신청 목록
            <span>
              (총
              {' '}
              {applicationsData ? applicationsData.length : 0}
              명 | 승인대기
              {' '}
              {getPendingStatusCount()}
              건)
            </span>
          </h2>
          <div className={styles.all_dropdowns}>
            {FILTER_OPTIONS.map((dropdown, index) => (
              <Dropdown
                key={index}
                className={`${styles.box} ${dropdown.isOpen ? styles['is-open'] : ''}`}
                buttonText={dropdown.buttonText}
                filterItems={dropdown.filterItems}
                selectedItem={filteredDropdown[index]}
                setSelectedItem={(item) => {
                  const updatedSelectedItems = [...filteredDropdown];
                  updatedSelectedItems[index] = item;
                  setFilteredDropdown(updatedSelectedItems);
                  if (dropdown.buttonText === '승인여부 전체') {
                    dispatch(updateFilter(item));
                  } else if (dropdown.buttonText === '신청일시순') {
                    dispatch(updateSortOrder(item));
                  } else if (dropdown.buttonText === '50개씩 보기') {
                    let limit = 50;
                    if (item === '100개씩 보기') {
                      limit = 100;
                    } else if (item === '25개씩 보기') {
                      limit = 25;
                    }
                    dispatch(updateLimit(limit));
                  }
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.lower_middle_row}>
          <button type="button" className={styles.btn} onClick={() => openModal('ChangeInvestment')}>
            등록
          </button>
          <div>
            <p>
              선택한
              {' '}
              {getApplicationsDataChecked().length}
              건
            </p>
            <Dropdown
              buttonText="승인상태 변경"
              filterItems={approvalStatus}
              selectedItem={prevSelectedStatus}
              setSelectedItem={setSelectedStatus}
              enabled={getApplicationsDataChecked().length}
            />
            <button
              type="button"
              className={styles.btn}
              onClick={handleSave}
              disabled={getApplicationsDataChecked().length > 0}
            >
              저장
            </button>
          </div>
        </div>
      </div>
      <ApplicationsTable />
    </section>
  );
};

export default ApplicationList;
