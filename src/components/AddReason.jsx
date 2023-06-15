import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiXMark } from 'react-icons/hi2';
import Checkbox from '../helpers/Checkbox';
import InputField from '../helpers/InputField';
import {
  resetAddReasonModal,
  toggleCheckbox,
  updateTextarea,
} from '../redux/addReason/actions';
import { DIRECT_INPUT } from '../utils/constants';
import { SAVED, ENTER_REQUIRED_FIELDS } from '../utils/messages';
import styles from '../styles/app.module.css';

const AddReason = ({
  displayPopup, closePopup, onClose, onApproval, openReason, initialMemberName, initialMemberNumber,
}) => {
  const dispatch = useDispatch();
  const checkboxes = useSelector((state) => state.addReason.checkboxes);
  const textarea = useSelector((state) => state.addReason.textarea);
  const applicationsData = useSelector((state) => state.applicationsData.filteredData);
  const [memberName, setMemberName] = useState(initialMemberName || '');
  const [memberNumber, setMemberNumber] = useState(initialMemberNumber || '');
  const [checkBoxList, setCheckBoxList] = useState(<></>);
  const [lastSavedDate, setLastSavedDate] = useState('');
  const [manager, setManager] = useState('');

  const handleCheckboxChange = (label) => {
    dispatch(toggleCheckbox(label));
  };

  const handleTextareaChange = (event) => {
    const { value } = event.target;
    dispatch(updateTextarea(value));
  };

  const closePopupEntirely = () => {
    dispatch(resetAddReasonModal());
    const selectedReason = Object.keys(checkboxes).find((key) => checkboxes[key]);
    const reason = selectedReason === DIRECT_INPUT ? textarea : selectedReason;
    onApproval(reason, memberName, memberNumber);
    closePopup();
    onClose();
  };

  const handleSave = (event) => {
    event.preventDefault();

    const isAnyCheckboxChecked = Object.values(checkboxes).includes(true);

    if ((!isAnyCheckboxChecked && textarea.trim() === '') || (checkboxes[DIRECT_INPUT] && textarea.trim() === '')) {
      displayPopup(ENTER_REQUIRED_FIELDS, closePopup, null);
    } else {
      displayPopup(SAVED, closePopupEntirely, null);
    }
  };

  const cancelPopup = () => {
    dispatch(resetAddReasonModal());
    onClose();
  };

  const getCheckBoxList = (modalData) => {
    let checkboxList = [];
    let found = false;

    if (openReason > 0 && modalData) {
      Object.entries(checkboxes).forEach(([label]) => {
        if (modalData.reason === label) {
          found = true;
        }
        checkboxList.push(
          <Checkbox
            key={label}
            label={label}
            checked={(modalData.reason === label) || (!found && label === '직접 입력')}
            onChange={() => handleCheckboxChange(label)}
            disabled
          />,
        );
      });
    } else {
      checkboxList = Object.entries(checkboxes).map(([label, checked]) => (
        <Checkbox
          key={label}
          label={label}
          checked={checked}
          onChange={() => handleCheckboxChange(label)}
          disabled={false}
        />
      ));
    }

    if (!found) {
      dispatch(updateTextarea(modalData?.reason || ''));
    }

    return <>{checkboxList}</>;
  };
  useEffect(() => {
    setCheckBoxList(getCheckBoxList());

    if (applicationsData) {
      const modalData = applicationsData.filter((data) => data.serial === openReason)[0] || null;
      if (modalData) {
        setCheckBoxList(getCheckBoxList(modalData));
        setMemberName(modalData.name || '');
        setMemberNumber(modalData.number || '');
        setLastSavedDate(modalData.applicationDate || '');
        setManager(modalData.admin || '');
      }
    }
  }, [checkboxes, applicationsData]);

  return (
    <section className={styles.modal}>
      <div>
        <h1 className={styles.title}>{openReason > 0 ? '승인거부 사유 확인' : '승인거부 사유 입력'}</h1>
        <HiXMark className={styles.xmark} onClick={cancelPopup} />
      </div>
      <div className={styles.model_content}>
        <form>
          <InputField
            text="회원번호"
            name="회원번호"
            placeholder="abc111, abc222"
            value={memberNumber}
            onChange={(e) => setMemberName(e.target.value)}
            enabled={openReason}
          />
          <InputField
            text="회원명/법인명"
            name="회원명/법인명"
            placeholder="김길동, ㈜가나다라투자"
            value={memberName}
            onChange={(e) => setMemberNumber(e.target.value)}
            enabled={openReason}
          />
          <div>
            <label htmlFor="text">
              승인거부 사유
              <span className={styles.req} />
              {' '}
            </label>
            <div className={styles.checkbox_wrapper}>
              {checkBoxList}
              <textarea
                onChange={handleTextareaChange}
                className={`${styles.add_reason} ${checkboxes[DIRECT_INPUT] ? styles.textarea_enabled : ''}`}
                placeholder="사유 입력"
                disabled={!checkboxes[DIRECT_INPUT]}
                value={textarea}
              />
            </div>
          </div>
        </form>
        {openReason > 0 && (
        <form>
          <div className={styles.row_div}>
            <InputField
              text="최근저장일시"
              name="최근저장일시"
              placeholder="2022-01-01 09:00:00"
              disabled
              value={lastSavedDate}
            />
            <InputField
              text="관리자"
              name="관리자"
              placeholder="김관리자"
              disabled
              value={manager}
            />
          </div>
        </form>
        )}
      </div>
      <div className={styles.model_btns}>
        {openReason > 0 ? (
          <button type="button" className={styles.save_btn} onClick={cancelPopup}>
            저장
          </button>
        ) : (
          <>
            <button type="button" className={styles.save_btn} onClick={handleSave}>
              저장
            </button>
            <button type="button" className={styles.cancel_btn} onClick={cancelPopup}>
              취소
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default AddReason;
