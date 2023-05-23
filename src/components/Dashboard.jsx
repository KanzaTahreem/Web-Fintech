import React, { useState } from 'react';
import ClientsTable from './ClientsTable';
import Dropdown from './Dropdown';
import styles from '../styles/dashboard.module.css';

const Dashboard = () => {
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

  const approvalStatus = ['승인완료', '승인거부'];
  const menus = [
    { buttonText: '승인여부 전체', menuItems: ['승인여부 전체', '승인대기', '승인완료', '승인거부'], selectedItem: null },
    { buttonText: '신청일시순', menuItems: ['신청일시순', '승인일시순'], selectedItem: null },
    { buttonText: '50개씩 보기', menuItems: ['25개씩 보기', '100개씩 보기'], selectedItem: null },
  ];

  const [approvalStatusSelectedItem, setApprovalStatusSelectedItem] = useState(null);
  const [menuItemsSelectedItems, setMenuItemsSelectedItems] = useState(menus.map(() => null));

  return (
    <section className={styles.member_management}>
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
            신청 목록<span>(총 100명 | 승인대기 1건)</span>
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
          <button type="button" className={styles.btn}>
            등록
          </button>
          <div>
            <p>선택한 0건</p>
            <Dropdown
              className={`${styles.box} ${approvalStatus.isOpen ? styles['is-open'] : ''}`}
              buttonText="승인상태 변경"
              menuItems={approvalStatus}
              selectedItem={approvalStatusSelectedItem}
              setSelectedItem={setApprovalStatusSelectedItem}
            />
            <button type="button" className={styles.btn}>
              저장
            </button>
          </div>
        </div>
      </div>
      <ClientsTable />
    </section>
  );
};

export default Dashboard;
