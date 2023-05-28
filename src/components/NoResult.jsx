import React, { useState } from 'react'
import Dropdown from './Dropdown';
import styles from '../styles/app.module.css';
import TableHead from './TableHead';

const NoResult = () => {

  const statusMenuItems = ['승인완료', '승인거부'];
  const menus = [
    { buttonText: '승인여부 전체', menuItems: ['승인여부 전체', '승인대기', '승인완료', '승인거부'], selectedItem: null },
    { buttonText: '신청일시순', menuItems: ['신청일시순', '승인일시순'], selectedItem: null },
    { buttonText: '50개씩 보기', menuItems: ['25개씩 보기', '100개씩 보기'], selectedItem: null },
  ];

  const [approvalStatusSelectedItem, setApprovalStatusSelectedItem] = useState(null);
  const [menuItemsSelectedItems, setMenuItemsSelectedItems] = useState(menus.map(() => null));


  return (
    <section className={styles.application_list}>
      <div className={styles.middle_row}>
        <div className={styles.upper_middle_row}>
          <h2 className={styles.headline}>
            신청 목록<span>(총 0건 | 승인대기 0명)</span>
          </h2>
          <div className={styles.all_dropdowns}>
            {menus.map((menu, index) => (
              <Dropdown
                key={index}
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
              buttonText="승인상태 변경"
              menuItems={statusMenuItems}
              selectedItem={approvalStatusSelectedItem}
              setSelectedItem={setApprovalStatusSelectedItem}
            />
            <button type="button" className={styles.btn}>
              저장
            </button>
          </div>
        </div>
      </div>
      <div className={styles.clients_table}>
        <table>
          <TableHead />
          <tbody>
              <tr className={styles.no_result}>조회 결과가 없습니다.</tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default NoResult;

