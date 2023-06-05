import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import { HiXMark } from 'react-icons/hi2';
import styles from '../styles/app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addApplicationData } from '../redux/applicationsDataReducer';
import { getFileExtension } from '../utils/getFileExtension';

const InvestChange = ({displayPopup, closePopup, onClose}) => {
  const investmentType = ['일반개인', '소득적격', '개인전문', '법인', '여신금융', 'P2P온투'];
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [filePaths, setFilePaths] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [prevSelectedItem, setPrevSelectedItem] = useState(null);
  const [fileLimit, setFileLimit] = useState(false);
  const [memberNumber, setMemberNumber] = useState('');
  const [memberName, setMemberName] = useState('');
  const dispatch = useDispatch();
  const members = useSelector((state) => state.membersData.data);

  const MAX_SIZE = 100 * 1024 * 1024;
  const MAX_COUNT = 10;

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    let totalSize = uploaded.reduce((size, file) => size + file.size, 0);

    files.some((file) => {
      const extension = file.name.split('.').pop().toLowerCase();
      const allowedExtensions = ['jpg', 'jpeg', 'gif', 'png', 'pdf'];

      if (!allowedExtensions.includes(extension)) {
        displayPopup('jpg, jpeg, gif, png, pdf 파일만 등록 가능합니다.', closePopup, null);
        return true;
      }

      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        if (totalSize + file.size <= MAX_SIZE) {
          uploaded.push(file);
          totalSize += file.size;
          if (uploaded.length === MAX_COUNT) setFileLimit(true);
          if (uploaded.length > MAX_COUNT) {
            displayPopup('최대 10개까지 등록 가능합니다.', closePopup, null);
            limitExceeded = true;
            return true;
          }
        } else {
          displayPopup('최대 100MB까지 등록 가능합니다.', closePopup, null);
          return true;
        }
      }
    });

    if (!limitExceeded) setUploadedFiles(uploaded);
    uploaded.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFilePaths([...filePaths, {
          name: file.name,
          path: event.target.result,
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (fileIndex) => {
    setUploadedFiles(uploadedFiles.filter((_f, index) => fileIndex !== index));
  }

  const handleFileEvent =  (e) => {
      const chosenFiles = Array.prototype.slice.call(e.target.files)
      handleUploadFiles(chosenFiles);
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (!selectedItem || !uploadedFiles.length) {
      displayPopup('필수입력항목을 입력해주세요.', closePopup, null);
      return;
    }
    displayPopup("저장되었습니다.", () => {
      dispatch(addApplicationData({
        applicationType: selectedItem,
        docs: uploadedFiles.map((file) => ({url: URL.createObjectURL(file), ext: getFileExtension(file.name)})),
        applicationDate: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString()}`,
        approvalStatus: '승인대기',
        reason: '',
        approvalDate: '',
        admin: '김관리자',
        checked: false,
        number: memberNumber,
        name: memberName,
        members
      }))
      closePopup();
      onClose();
    }, null)
  };

  const updateSelectedItemAndClose = (changeItem) => {
    if(changeItem) {
      setPrevSelectedItem(selectedItem);
    } else {
      setSelectedItem(prevSelectedItem);
    }
    closePopup();
  }

  useEffect(() => {
    if (selectedItem) {
      if (prevSelectedItem) {
        if (selectedItem !== prevSelectedItem) {
          displayPopup(
            '투자유형을 변경하시겠습니까?',
            () => updateSelectedItemAndClose(true),
            () => updateSelectedItemAndClose(false)
          )
        }
      } else {
        setPrevSelectedItem(selectedItem);
      }
    }
  }, [selectedItem])

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'memberNumber') {
      setMemberNumber(value);
    } else if (name === 'memberName') {
      setMemberName(value);
    }
  }

  return (
    <section className={`${styles.investment_change} ${styles.modal}`}>
      <div>
        <h1 className={styles.title}>투자유형 변경</h1>
        <HiXMark className={styles.xmark} onClick={onClose} />
      </div>
      <div className={styles.model_content}>
        <form>
          <div>
            <label htmlFor="text">회원번호</label>
            <input type="text" name="memberNumber" placeholder="abc111" value={memberNumber} onChange={onInputChange} />
          </div>
          <div>
            <label htmlFor="text">회원명/법인명</label>
            <input type="text" name="memberName" placeholder="김길동" value={memberName} onChange={onInputChange} />
          </div>
          <div>
            <label htmlFor="text">예치금잔액</label>
            <Dropdown
              className={`${styles.box} ${styles.required} ${investmentType.isOpen ? styles['is-open'] : ''}`}
              buttonText="일반개인"
              menuItems={investmentType}
              id="investment_type"
              selectedItem= {prevSelectedItem}
              setSelectedItem = {setSelectedItem}
            />
          </div>
          <div>
            <label htmlFor="text">투자건수</label>
            <div className={styles.file_input_area}>
              <label htmlFor='fileUpload' className={styles.file_label}>
                <p className={`${styles.upload_files} ${!fileLimit ? '' : 'disabled' } `}>파일 선택</p>
              </label>
              <input
                id="fileUpload"
                className={styles.required}
                type='file'
                multiple
                accept='*/*'
                onChange={handleFileEvent}
              />
              <div className={styles.files_list}>
                {uploadedFiles.map((file, index) => (
                  <div key={`${file.name}-${index}`}>
                      {file.name} {<HiXMark onClick={() => removeFile(index)}/>}
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
        <button className={styles.save_btn} onClick={handleSave}>저장</button>
        <button className={styles.cancel_btn} onClick={onClose}>취소</button>
      </div>
    </section>
  );
}

export default InvestChange;
