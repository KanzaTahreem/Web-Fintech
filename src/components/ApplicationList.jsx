import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ClientsTable from './ClientsTable';
import Dropdown from './Dropdown';
import styles from '../styles/app.module.css';
import { Modal } from './Modal';
import InvestChange from './InvestChange';
import Container from './Container';
import { useSelector } from 'react-redux';
import { updateApprovalStatus } from '../redux/clientsDataReducer';
import RegisterReason from './RegisterReason';

const ApplicationList = ({displayPopup, closePopup}) => {
  const tabItems = [
    '기본정보 관리',
    '투자유형 관리',
    '입출금내역 조회',
    '영업내역 조회',
    '투자내역 조회',
    '채권내역 조회',
    'SMS 관리',
    '상담내역 관리',
    '1:1문의내역 조회',
  ];
  const menus = [
    { buttonText: '승인여부 전체', menuItems: ['승인여부 전체', '승인대기', '승인완료', '승인거부'], selectedItem: null },
    { buttonText: '신청일시순', menuItems: ['신청일시순', '승인일시순'], selectedItem: null },
    { buttonText: '50개씩 보기', menuItems: ['25개씩 보기', '100개씩 보기'], selectedItem: null },
  ];
  const approvalStatus = ['승인완료', '승인거부'];

  const [modal, setModal] = useState(<></>);
  const [approvalStatusSelectedItem, setApprovalStatusSelectedItem] = useState(null);
  const [prevApprovalStatusSelectedItem, setPrevApprovalStatusSelectedItem] = useState(null);
  const [menuItemsSelectedItems, setMenuItemsSelectedItems] = useState(menus.map(() => null));
  const clientsData = useSelector((state) => state.clientsData.data);
  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    if (clientsData && getClientsDataChecked().length) {
      displayPopup("saved", closePopup, null);
      return;
    }
    displayPopup('No applications selected', closePopup, null);
  }

  const closeRegisterReason = () => {
    setApprovalStatusSelectedItem("승인상태 변경");
    setPrevApprovalStatusSelectedItem(null);
    setModal(<></>);
  };

  const closeInvestChange = () => {
    setModal(<></>);
  }

  const updateAllSelected = (reasonOfDenial, memberNumber, memberName) => {
    getClientsDataChecked().forEach((application) => {
      dispatchApprovalStatusUpdate(application.serial, approvalStatusSelectedItem, reasonOfDenial, memberNumber, memberName);
    });
  }

  const openModal = (name) => {
    if (name === "InvestChange") {
      setModal(
        <Modal>
          <Container>
            <InvestChange onClose={closeInvestChange} />
          </Container>
        </Modal>)
    } else if (name === "RegisterReason") {
      setModal(
        <Modal>
          <Container>
            <RegisterReason onClose={closeRegisterReason} onApproval={updateAllSelected} openReason={-1} />
          </Container>
        </Modal>
      )
    }
  }

  const updateSelectedItemAndClose = (changeItem) => {
    if(changeItem) {
      if (approvalStatusSelectedItem === approvalStatus[1]) {
        openModal("RegisterReason")
      } else {
        updateAllSelected();
      }
      setPrevApprovalStatusSelectedItem(approvalStatusSelectedItem);
    } else {
      setApprovalStatusSelectedItem(prevApprovalStatusSelectedItem)
    }
    closePopup();
  }

  const dispatchApprovalStatusUpdate = (i, status, reasonOfDenial, memberNumber, memberName) => {
    dispatch(updateApprovalStatus({serial: i, approvalStatus: status, reasonOfDenial, memberNumber, memberName}));
  };

  useEffect(() => {
    if (approvalStatusSelectedItem) {
      if (prevApprovalStatusSelectedItem) {
        if (approvalStatusSelectedItem !== prevApprovalStatusSelectedItem) {
          displayPopup(
            'Do you want to change the approval status of selected 2 cases?',
            () => updateSelectedItemAndClose(true),
            () => updateSelectedItemAndClose(false)
          )
        }
      } else {
        setPrevApprovalStatusSelectedItem(approvalStatusSelectedItem);
      }
    }
  }, [approvalStatusSelectedItem])

  const getClientsDataChecked = () => clientsData ? clientsData.filter((client) => client.checked) : [];

  const getPendingApprovalsCount = () => {
    if (clientsData) {
      return clientsData.filter((client) => client.approvalStatus === '승인대기').length;
    }
    return 0;
  };

  return (
    <section className={styles.application_list}>
      {modal}
      <div className={styles.upper_row}>
        <h1 className={styles.headline}>회원상세</h1>
        <div className={styles.tabs}>
          {tabItems.map((tab, index) => (
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
            <span>(총 {clientsData ? clientsData.length : 0}명 | 승인대기 {getPendingApprovalsCount()}건)</span>
          </h2>
          <div className={styles.all_dropdowns}>
            {menus.map((menu, index) => (
              <Dropdown
                key={index}
                className={`${styles.box} ${menu.isOpen ? styles['is-open'] : ''}`}
                buttonText={menu.buttonText}
                menuItems={menu.menuItems}
                selectedItem={menuItemsSelectedItems[index]}
                setSelectedItem={(item) => {
                  const updatedSelectedItems = [...menuItemsSelectedItems];
                  updatedSelectedItems[index] = item;
                  setMenuItemsSelectedItems(updatedSelectedItems);
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.lower_middle_row}>
          <button type="button" className={styles.btn} onClick={() => openModal('InvestChange')}>
            등록
          </button>
          <div>
            <p>선택한 {getClientsDataChecked().length}건</p>
            <Dropdown
              buttonText="승인상태 변경"
              menuItems={approvalStatus}
              selectedItem={prevApprovalStatusSelectedItem}
              setSelectedItem={setApprovalStatusSelectedItem}
              enabled={getClientsDataChecked().length}
            />
            <button
              type="button"
              className={styles.btn}
              onClick={handleSave}
              disabled={getClientsDataChecked().length > 0}
            >
              저장
            </button>
          </div>
        </div>
      </div>
      <ClientsTable  />
    </section>
  );
};

export default ApplicationList;
