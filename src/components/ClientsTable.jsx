import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableHead from './TableHead'
import TableRow from './TableRow'
import leftDoubleArrow from '../assets/images/double_left_arrow.svg'
import rightDoubleArrow from '../assets/images/double_right_arrow.svg'
import leftArrow from '../assets/images/left_arrow.svg'
import rightArrow from '../assets/images/right_arrow.svg'
import styles from '../styles/app.module.css';
import Container from './Container';
import { selectUnSelectApplication } from '../redux/clientsDataReducer';

const ClientsTable = () => {
  const clientsData = useSelector((state) => state.clientsData.data);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();


  const handleCheckAll = () => {
    setSelectAll(!selectAll);
    clientsData.forEach((item) => {
      if (item.approvalStatus !== '승인거부' && item.approvalStatus !== '승인완료') {
        dispatch(selectUnSelectApplication({
          checked: !selectAll,
          serial: item.serial
        }));
      }
    });
  };
  return (
    <>
      <div className={styles.clients_table}>
        <table>
          <TableHead handleCheckAll={handleCheckAll} />
          <tbody>
          {clientsData && clientsData.map((item) => (
              <Container>
                <TableRow
                  key={item.serial}
                  item={item}
                />
              </Container>
            ))
          }
          </tbody>
        </table>
      </div>
      <div className={styles.pagination_frame}>
        <div className={styles.pagination}>
          <div className={styles.arrows}>
            <img src={leftDoubleArrow} alt="left_arrow" />
            <img src={leftArrow} alt="left_arrow" />
          </div>
          <div className={styles.numbers}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </div>
          <div className={styles.arrows}>
            <img src={rightArrow} alt="right_arrow" />
            <img src={rightDoubleArrow} alt="right_arrow" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientsTable;
