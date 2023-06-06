import React, { useEffect, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import Checkbox from './Checkbox';
import styles from '../styles/app.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetRegisterModal, toggleCheckbox, updateTextarea } from '../redux/registerReducer';
import InputField from './InputField';
import { selectUnSelectApplication } from '../redux/applicationsDataReducer';

const RegisterReason = ({ displayPopup, closePopup, onClose, onApproval, openReason }) => {
  const dispatch = useDispatch();
  const checkboxes = useSelector((state) => state.register.checkboxes);
  const textarea = useSelector((state) => state.register.textarea);
  const applicationsData = useSelector((state) => state.applicationsData.filteredData);
  const [memberName, setMemberName] = useState("");
  const [memberNumber, setMemberNumber] = useState("");
  const [checkBoxList, setCheckBoxList] = useState(<></>);
  const [lastSavedDate, setLastSavedDate] = useState("");
  const [manager, setManager] = useState("");

  useEffect(() => {
    setCheckBoxList(getCheckBoxList());
  }, [checkboxes]);

  useEffect(() => {
    if (applicationsData) {
      const modalData = applicationsData.filter((data) => data.serial === openReason)[0] || null;
      if (modalData) {
        setCheckBoxList(getCheckBoxList(modalData));
        setMemberName(modalData.name || "");
        setMemberNumber(modalData.number || "");
        setLastSavedDate(modalData.applicationDate || "");
        setManager(modalData.admin || "");
      }
    } else {
      setCheckBoxList(getCheckBoxList());
    }
  }, [applicationsData]);

  const handleCheckboxChange = (label) => {
    dispatch(toggleCheckbox(label));
  };

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    dispatch(updateTextarea(value));
  };

  const closePopupEntirely = () => {
    dispatch(resetRegisterModal())
    let reason = "";
    for (const key in checkboxes) {
      if (checkboxes.hasOwnProperty(key) && checkboxes[key]) {
        reason = key;
      }
    }
    if (reason === '직접 입력') {
      reason = textarea
    }
    onApproval(reason, memberName, memberNumber);

    closePopup();
    onClose();
  }

  const handleSave = (event) => {
    event.preventDefault();

    const isAnyCheckboxChecked = Object.values(checkboxes).includes(true);

    if ((!isAnyCheckboxChecked && textarea.trim() === '') || (checkboxes['직접 입력'] && textarea.trim() === '')) {
      displayPopup('Either checkboxes or textarea must be filled', closePopup, null);
    } else {
      displayPopup('Saved', closePopupEntirely, null);
    }
  };

  const cancelPopup = () => {
    dispatch(resetRegisterModal())
    onClose();
  }

  const getCheckBoxList = (modalData) => {
    let checkboxList = [];
    let found = false;
    if (openReason > 0 && modalData) {
      for (const [label] of Object.entries(checkboxes)){
        if (modalData.reason === label) {
          found = true;
        }
        checkboxList.push(<Checkbox
          key={label}
          label={label}
          checked={(modalData.reason === label) || (!found && label === "직접 입력")}
          onChange={() => handleCheckboxChange(label)}
          disabled={true}
        />)
      }
    } else {
      checkboxList = Object.entries(checkboxes).map(([label, checked]) => (
        <Checkbox
          key={label}
          label={label}
          checked={checked}
          onChange={() => handleCheckboxChange(label)}
          disabled={false}
        />
      ))
    }
    if (!found) {
      dispatch(updateTextarea(modalData?.reason || ''));
    }
    return (
      <>
        {checkboxList}
      </>
    );
  }

  return (
    <section className={styles.modal}>
      <div>
        <h1 className={styles.title}>{openReason > 0 ? '승인거부 사유 확인' : '승인거부 사유 입력'}</h1>
        <HiXMark className={styles.xmark}  onClick={cancelPopup} />
      </div>
      <div className={styles.model_content}>
        <form>
          <InputField text={"회원번호"} placeholder={"abc111, abc222"} value={memberNumber} onChange={(e) => setMemberName(e.target.value)} enabled={openReason} />
          <InputField text={"회원명/법인명"} placeholder={"김길동, ㈜가나다라투자"} value={memberName} onChange={(e) => setMemberNumber(e.target.value)} enabled={openReason} />
          <div>
            <label htmlFor="text">승인거부 사유<span className={styles.req} /> </label>
            <div className={styles.checkbox_wrapper}>
              {checkBoxList}
              <textarea
                onChange={handleTextareaChange}
                className={`${styles.add_reason} ${checkboxes['직접 입력'] ? styles.textarea_enabled : ''}`}
                placeholder="사유 입력"
                disabled={!checkboxes['직접 입력']}
                value={textarea}
              ></textarea>
            </div>
          </div>
        </form>
        {openReason > 0 && <form>
          <div className={styles.row_div}>
            <div>
              <label htmlFor="text">최근저장일시</label>
              <input type="text" name="text" placeholder="2022-01-01 09:00:00" disabled value={lastSavedDate}/>
            </div>
            <div>
              <label htmlFor="text">관리자</label>
              <input type="text" name="text" placeholder="김관리자" disabled value={manager} />
            </div>
          </div>
        </form>}
      </div>
      <div className={styles.model_btns}>
        {openReason > 0 ? <button className={styles.save_btn} onClick={cancelPopup}>
          저장
        </button> : <>
          <button className={styles.save_btn} onClick={handleSave}>
            저장
          </button>
          <button className={styles.cancel_btn} onClick={cancelPopup}>취소</button>
        </>}
      </div>
    </section>
  );
};

export default RegisterReason;
