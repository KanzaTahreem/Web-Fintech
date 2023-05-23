import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import Checkbox from './Checkbox';
import styles from '../styles/modal.module.css';

const RegisterReason = () => {
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
            <input type="text" name="text" placeholder="abc111, abc222"/>
          </div>
          <div>
            <label htmlFor="text">회원명/법인명</label>
            <input type="text" name="text" placeholder="김길동, ㈜가나다라투자" />
          </div>
          <div>
            <label htmlFor="text">승인거부 사유</label>
            <div className={styles.checkbox_wrapper}>
              <Checkbox label="서류 식별 불가" />
              <Checkbox label="필수 서류 누락" />
              <Checkbox label="서류의 내용이 등록된 회원정보와 다름" />
              <Checkbox label="서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)" />
              <Checkbox label="서류의 유효기간이 초과됨" />
              <Checkbox label="직접 입력" />
              <textarea className={styles.add_reason} placeholder='사유 입력'></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.model_btns}>
        <button className={styles.save_btn}>저장</button>
        <button className={styles.cancel_btn}>취소</button>
      </div>
    </section>
  );
}

export default RegisterReason;
