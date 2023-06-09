import styles from '../styles/app.module.css';

const Modal = ({children}) => {
  return (
    <>
      <div className={styles.children}>{children}</div>
      <div className={styles.background}/>
    </>
  )
};

export default Modal;
