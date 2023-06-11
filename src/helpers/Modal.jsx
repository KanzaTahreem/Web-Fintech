import styles from '../styles/app.module.css';

const Modal = ({ children }) => (
  <>
    <div className={styles.children}>{children}</div>
    <div className={styles.background} />
  </>
);

export default Modal;
