import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import leftDoubleArrow from '../assets/images/double_left_arrow.svg';
import rightDoubleArrow from '../assets/images/double_right_arrow.svg';
import leftArrow from '../assets/images/left_arrow.svg';
import rightArrow from '../assets/images/right_arrow.svg';
import {
  toggleApplicationCheck,
  updateCurrentPage,
} from '../redux/applicationData/actions';
import Container from '../helpers/Container';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { DENIED, APPROVED } from '../utils/constants';
import styles from '../styles/app.module.css';

const ApplicationsTable = () => {
  const filteredApplicationsData = useSelector((state) => state.applicationsData.filteredData);
  const currentPage = useSelector((state) => state.applicationsData.currentPage);
  const itemsPerPage = useSelector((state) => state.applicationsData.limit);
  const [paginatedData, setPaginatedData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();

  const handleCheckAll = () => {
    setSelectAll(!selectAll);
    paginatedData.forEach((item) => {
      if (item.approvalStatus !== DENIED && item.approvalStatus !== APPROVED) {
        dispatch(toggleApplicationCheck({
          checked: !selectAll,
          serial: item.serial,
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
    let nextPage;
    if (isFirstPage) {
      nextPage = 1;
    } else if (isLastPage) {
      nextPage = totalPages;
    } else if (moveForward) {
      nextPage = currentPage + 1;
      nextPage = Math.min(nextPage, totalPages);
    } else {
      nextPage = currentPage - 1;
      nextPage = Math.max(nextPage, 1);
    }
    dispatch(updateCurrentPage(nextPage));
  };

  const goto = (i) => dispatch(updateCurrentPage(i));

  const renderPageNumbers = () => Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
    <span
      key={pageNumber}
      className={currentPage === pageNumber ? styles.activePage : styles.pageNumber}
      onClick={() => goto(pageNumber)}
      onKeyDown={() => null}
      role="button"
      tabIndex="0"
    >
      {pageNumber}
    </span>
  ));

  return (
    <>
      <div className={styles.applications_table}>
        <table>
          <TableHead handleCheckAll={handleCheckAll} checked={selectAll} />
          <tbody>
            {paginatedData && paginatedData.length ? (
              paginatedData.map((item) => (
                <Container key={item.serial}>
                  <TableRow item={item} />
                </Container>
              ))
            ) : (
              <tr>
                <td className={styles.no_result}>
                  조회 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination_frame}>
        <div className={styles.pagination}>
          <div className={styles.arrows}>
            <button type="button" onClick={() => changePage(false, true, false)} onKeyDown={() => null}>
              <img
                src={leftDoubleArrow}
                alt="left_double_arrow"
              />
            </button>
            <button type="button" onClick={() => changePage(false)} onKeyDown={() => null}>
              <img
                src={leftArrow}
                alt="left_arrow"
              />
            </button>
          </div>
          <div className={styles.numbers}>{renderPageNumbers()}</div>
          <div className={styles.arrows}>
            <button type="button" onClick={() => changePage(true)} onKeyDown={() => null}>
              <img
                src={rightArrow}
                alt="right_double_arrow"
              />
            </button>
            <button type="button" onClick={() => changePage(true, false, true)} onKeyDown={() => null}>
              <img
                src={rightDoubleArrow}
                alt="right_arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationsTable;
