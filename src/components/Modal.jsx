import styles from '../styles/app.module.css';

export const Modal = ({children}) => {
  return (
    <>
      <div className={styles.children_div}>
        {children}
      </div>
      <div className={styles.background_div}/>
    </>
  )
}