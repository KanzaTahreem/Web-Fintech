import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import Checkbox from './Checkbox';
import styles from '../styles/modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetRegisterModal, toggleCheckbox, updateTextarea } from '../redux/registerReducer';
import InputField from './InputField';

const RegisterReason = ({ displayPopup, closePopup, onClose, onApproval }) => {
  const dispatch = useDispatch();
  const checkboxes = useSelector((state) => state.register.checkboxes);
  const textarea = useSelector((state) => state.register.textarea)

  const handleCheckboxChange = (label) => {
    dispatch(toggleCheckbox(label));
  };

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    dispatch(updateTextarea(value));
  };

  const closePopupEntirely = () => {
    dispatch(resetRegisterModal())
    onApproval();
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

  return (
    <section className={styles.register_reason}>
      <div>
        <h1 className={styles.title}>투자유형 변경</h1>
        <HiXMark className={styles.xmark}  onClick={cancelPopup} />
      </div>
      <div className={styles.model_content}>
        <form>
          <InputField text={"회원번호"} placeholder={"abc111, abc222"} />
          <InputField text={"회원명/법인명"} placeholder={"김길동, ㈜가나다라투자"} />
          <div>
            <label htmlFor="text">승인거부 사유</label>
            <div className={styles.checkbox_wrapper}>
              {Object.entries(checkboxes).map(([label, checked]) => (
                <Checkbox
                  key={label}
                  label={label}
                  checked={checked}
                  onChange={() => handleCheckboxChange(label)}
                  disabled={
                    (Object.values(checkboxes).some((value) => value) && !checked) ||
                    (label === '직접 입력' && checked)
                  }
                />
              ))}
              <textarea
                onChange={handleTextareaChange}
                className={`${styles.add_reason} ${checkboxes['직접 입력'] ? styles.textarea_enabled : ''}`}
                placeholder="사유 입력"
                disabled={!checkboxes['직접 입력']}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.model_btns}>
        <button className={styles.save_btn} onClick={handleSave}>
          저장
        </button>
        <button className={styles.cancel_btn} onClick={cancelPopup}>취소</button>
      </div>
    </section>
  );
};

export default RegisterReason;
