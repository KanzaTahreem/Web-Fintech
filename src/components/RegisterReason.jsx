import React, { useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import Checkbox from './Checkbox';
import styles from '../styles/modal.module.css';

const RegisterReason = ({ displayPopup, closePopup }) => {
  const [reasons, setReasons] = useState({
    checkboxes: {
      '서류 식별 불가': false,
      '필수 서류 누락': false,
      '서류의 내용이 등록된 회원정보와 다름': false,
      '서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)': false,
      '서류의 유효기간이 초과됨': false,
      '직접 입력': false,
    },
    textarea: '',
  });

  const handleCheckboxChange = (label) => {
    setReasons((prevReasons) => ({
      checkboxes: {
        ...Object.keys(prevReasons.checkboxes).reduce((acc, key) => {
          acc[key] = key === label ? !prevReasons.checkboxes[key] : false;
          return acc;
        }, {}),
      },
      textarea: prevReasons.textarea,
    }));
  };

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setReasons((prevReasons) => ({
      ...prevReasons,
      textarea: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    const { checkboxes, textarea } = reasons;
    const isAnyCheckboxChecked = Object.values(checkboxes).includes(true);

    if ((!isAnyCheckboxChecked && textarea.trim() === '') || (checkboxes['직접 입력'] && textarea.trim() === '')) {
      displayPopup('Either checkboxes or textarea must be filled', closePopup, null);
    } else {
      displayPopup('Saved', closePopup, null);
    }
  };

  return (
    <section className={styles.register_reason}>
      <div>
        <h1 className={styles.title}>투자유형 변경</h1>
        <HiXMark className={styles.xmark} />
      </div>
      <div className={styles.model_content}>
        <form>
          <div>
            <label htmlFor="text">회원번호</label>
            <input type="text" name="text" placeholder="abc111, abc222" />
          </div>
          <div>
            <label htmlFor="text">회원명/법인명</label>
            <input type="text" name="text" placeholder="김길동, ㈜가나다라투자" />
          </div>
          <div>
            <label htmlFor="text">승인거부 사유</label>
            <div className={styles.checkbox_wrapper}>
              {Object.entries(reasons.checkboxes).map(([label, checked]) => (
                <Checkbox
                  key={label}
                  label={label}
                  checked={checked}
                  onChange={() => handleCheckboxChange(label)}
                  disabled={
                    (Object.values(reasons.checkboxes).some((value) => value) && !checked) ||
                    (label === '직접 입력' && checked)
                  }
                />
              ))}

              <textarea
                onChange={handleTextareaChange}
                className={`${styles.add_reason} ${reasons.checkboxes['직접 입력'] ? styles.textarea_enabled : ''}`}
                placeholder="사유 입력"
                disabled={!reasons.checkboxes['직접 입력']}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.model_btns}>
        <button className={styles.save_btn} onClick={handleSave}>
          저장
        </button>
        <button className={styles.cancel_btn}>취소</button>
      </div>
    </section>
  );
};

export default RegisterReason;
