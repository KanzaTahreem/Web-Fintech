import styles from '../styles/app.module.css';

export const Modal = ({children}) => {
  return (
    <>
      <div className={styles.children}>{children}</div>
      <div className={styles.background}/>
    </>
  )
}