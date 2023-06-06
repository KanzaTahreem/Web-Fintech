import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableHead from './TableHead'
import TableRow from './TableRow'
import leftDoubleArrow from '../assets/images/double_left_arrow.svg'
import rightDoubleArrow from '../assets/images/double_right_arrow.svg'
import leftArrow from '../assets/images/left_arrow.svg'
import rightArrow from '../assets/images/right_arrow.svg'
import styles from '../styles/app.module.css';
import Container from './Container';
import { selectUnSelectApplication, updateCurrentPage } from '../redux/applicationsDataReducer';

const ApplicationsTable = () => {
  const filteredApplicationsData = useSelector((state) => state.applicationsData.filteredData);
  const currentPage =  useSelector((state) => state.applicationsData.currentPage);
  const itemsPerPage =  useSelector((state) => state.applicationsData.limit);
  const [paginatedData, setPaginatedData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();

  const handleCheckAll = () => {
    setSelectAll(!selectAll);
    paginatedData.forEach((item) => {
      if (item.approvalStatus !== '승인거부' && item.approvalStatus !== '승인완료') {
        dispatch(selectUnSelectApplication({
          checked: !selectAll,
          serial: item.serial
        }));
      }
    });
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    setPaginatedData(filteredApplicationsData.slice(startIndex, startIndex + itemsPerPage));
  }, [filteredApplicationsData, itemsPerPage, currentPage]);

  const totalPages = Math.ceil(filteredApplicationsData.length / itemsPerPage);
  const changePage = (moveForward, isFirstPage, isLastPage) => {
    console.log('Forward:', moveForward);
    console.log(totalPages);
    let nextPage;
    if (isFirstPage) {
      nextPage = 1;
    } else if (isLastPage) {
      nextPage = totalPages;
    } else if (moveForward) {
      nextPage = currentPage + 1;
      nextPage = Math.min(nextPage, totalPages); // Ensure next page doesn't exceed total pages
    } else {
      nextPage = currentPage - 1;
      nextPage = Math.max(nextPage, 1); // Ensure next page doesn't go below 1
    }
    console.log(nextPage);
    dispatch(updateCurrentPage(nextPage));
  };

  const goto = (i) =>  dispatch(updateCurrentPage(i));

  return (
    <>
      <div className={styles.applications_table}>
        <table>
          <TableHead handleCheckAll={handleCheckAll} />
          <tbody>
          {paginatedData && paginatedData.length ? paginatedData.map((item) => (
              <Container>
                <TableRow
                  key={item.serial}
                  item={item}
                />
              </Container>
            )) : <tr className={styles.no_result}>조회 결과가 없습니다.</tr>
          }
          </tbody>
        </table>
      </div>
      <div className={styles.pagination_frame}>
        <div className={styles.pagination}>
          <div className={styles.arrows}>
            <img src={leftDoubleArrow} alt="left_double_arrow" onClick={() => changePage(false, true, false)} />
            <img src={leftArrow} alt="left_arrow"  onClick={() => changePage(false)} />
          </div>
          <div className={styles.numbers}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <p
                className={currentPage === pageNumber ? styles.activePage : styles.pageNumber}
                onClick={() => goto(pageNumber)}
              >
                {pageNumber}
              </p>
            ))}
          </div>
          <div className={styles.arrows}>
            <img src={rightArrow} alt="right_double_arrow" onClick={() => changePage(true)} />
            <img src={rightDoubleArrow} alt="right_arrow" onClick={() => changePage(true, false, true)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplicationsTable;
