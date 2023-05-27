import React from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'
import leftDoubleArrow from '../assets/images/double_left_arrow.svg'
import rightDoubleArrow from '../assets/images/double_right_arrow.svg'
import leftArrow from '../assets/images/left_arrow.svg'
import rightArrow from '../assets/images/right_arrow.svg'
import styles from '../styles/dashboard.module.css';
import Container from './Container';

const ClientsTable = ({ selectedApplications, onChange, clientsData }) => {
  return (
    <>
      <div className={styles.clients_table}>
        <table>
          <TableHead />
          <tbody>
          {clientsData.map((item, index) => (
              <Container>
                <TableRow
                  key={index}
                  item={item}
                  selectedApplications={selectedApplications}
                  onChange={onChange}
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
