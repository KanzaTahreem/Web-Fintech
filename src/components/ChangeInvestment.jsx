import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiXMark } from 'react-icons/hi2';
import { addApplicationData } from '../redux/applicationData/actions';
import getFileExtension from '../utils/getFileExtension';
import Dropdown from './Dropdown';
import InputField from '../helpers/InputField';
import {
  PENDING,
  MAX_SIZE,
  MAX_COUNT,
  INVESTMENT_TYPE,
} from '../utils/constants';
import {
  SAVED,
  ALLOWED_FILE_TYPES,
  ALLOWED_FILE_NO,
  ALLOWED_FILE_SIZE,
  CONFIRM_CHANGE_TYPE,
  ENTER_REQUIRED_FIELDS,
} from '../utils/messages';
import styles from '../styles/app.module.css';

const ChangeInvestment = ({ displayPopup, closePopup, onClose }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [filePaths, setFilePaths] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [prevSelectedItem, setPrevSelectedItem] = useState(null);
  const [fileLimit, setFileLimit] = useState(false);
  const [memberNumber, setMemberNumber] = useState('');
  const [memberName, setMemberName] = useState('');
  const dispatch = useDispatch();
  const members = useSelector((state) => state.membersData.data);

  const UploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    let totalSize = uploaded.reduce((size, file) => size + file.size, 0);
    const allowedExtensions = ['jpg', 'jpeg', 'gif', 'png', 'pdf'];

    files.some((file) => {
      const extension = file.name.split('.').pop().toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        displayPopup(ALLOWED_FILE_TYPES, closePopup, null);
        return true;
      }

      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        if (totalSize + file.size <= MAX_SIZE) {
          uploaded.push(file);
          totalSize += file.size;
          if (uploaded.length === MAX_COUNT) setFileLimit(true);
          if (uploaded.length > MAX_COUNT) {
            displayPopup(ALLOWED_FILE_NO, closePopup, null);
            limitExceeded = true;
            return true;
          }
        } else {
          displayPopup(ALLOWED_FILE_SIZE, closePopup, null);
          return true;
        }
      }
      return true;
    });

    if (!limitExceeded) setUploadedFiles(uploaded);
    uploaded.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFilePaths([
          ...filePaths,
          {
            name: file.name,
            path: event.target.result,
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (fileIndex) => {
    setUploadedFiles(uploadedFiles.filter((_f, index) => fileIndex !== index));
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    UploadFiles(chosenFiles);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!selectedItem || !uploadedFiles.length) {
      displayPopup(ENTER_REQUIRED_FIELDS, closePopup, null);
      return;
    }
    displayPopup(SAVED, () => {
      dispatch(addApplicationData({
        applicationType: selectedItem,
        docs: uploadedFiles.map((file) => ({ url: URL.createObjectURL(file), ext: getFileExtension(file.name) })),
        applicationDate: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString()}`,
        approvalStatus: PENDING,
        reason: '',
        approvalDate: '',
        admin: '김관리자',
        checked: false,
        number: memberNumber,
        name: memberName,
        members,
      }));
      closePopup();
      onClose();
    }, null);
  };

  const updateSelectedItemAndClose = (changeItem) => {
    if (changeItem) {
      setPrevSelectedItem(selectedItem);
    } else {
      setSelectedItem(prevSelectedItem);
    }
    closePopup();
  };

  useEffect(() => {
    if (selectedItem) {
      if (prevSelectedItem) {
        if (selectedItem !== prevSelectedItem) {
          displayPopup(
            CONFIRM_CHANGE_TYPE,
            () => updateSelectedItemAndClose(true),
            () => updateSelectedItemAndClose(false),
          );
        }
      } else {
        setPrevSelectedItem(selectedItem);
      }
    }
  }, [selectedItem]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'memberNumber') {
      setMemberNumber(value);
    } else if (name === 'memberName') {
      setMemberName(value);
    }
  };

  return (
    <section className={`${styles.investment_change} ${styles.modal}`}>
      <div>
        <h1 className={styles.title}>투자유형 변경</h1>
        <HiXMark className={styles.xmark} onClick={onClose} />
      </div>
      <div className={styles.model_content}>
        <form>
          <InputField
            text="회원번호"
            placeholder="abc111"
            name="memberNumber"
            value={memberNumber}
            onChange={onInputChange}
            enabled={0}
          />
          <InputField
            text="회원명/법인명"
            placeholder="김길동"
            name="memberName"
            value={memberName}
            onChange={onInputChange}
            enabled={0}
          />
          <div>
            <label htmlFor="text">
              투자유형
              {' '}
              <span className={styles.req} />
            </label>
            <Dropdown
              className={`${styles.box} ${styles.required} ${INVESTMENT_TYPE.isOpen ? styles['is-open'] : ''}`}
              buttonText="일반개인"
              filterItems={INVESTMENT_TYPE}
              id="investment_type"
              selectedItem={prevSelectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div>
            <label htmlFor="text">
              서류첨부
              {' '}
              <span className={styles.req} />
              {' '}
            </label>
            <div className={styles.file_input_area}>
              <label htmlFor="fileUpload" className={styles.file_label}>
                <p className={`${styles.upload_files} ${!fileLimit ? '' : 'disabled'} `}>파일 선택</p>
              </label>
              <input
                id="fileUpload"
                className={styles.required}
                type="file"
                multiple
                accept="*/*"
                onChange={handleFileEvent}
              />
              <div className={styles.files_list}>
                {uploadedFiles.map((file, index) => (
                  <div key={`${file.index}`}>
                    {file.name}
                    {' '}
                    <HiXMark onClick={() => removeFile(index)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
        <ul className={styles.info}>
          <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
          <li>최대 10개, 100MB까지 등록이 가능합니다.</li>
        </ul>
      </div>
      <div className={styles.model_btns}>
        <button type="button" className={styles.save_btn} onClick={handleSave}>저장</button>
        <button type="button" className={styles.cancel_btn} onClick={onClose}>취소</button>
      </div>
    </section>
  );
};

export default ChangeInvestment;
