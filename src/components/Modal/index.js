//Components
import closeBtn from "src/assets/images/close.svg";
import styles from "./modal.module.scss";

const Modal = ({ show, close, title, children }) => {
  return (
    <>
      {show ? (
        <div className={styles["modalContainer"]} onClick={() => close()}>
          <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
            <header className={styles["modal_header"]}>
              <h2 className={styles["modal_header-title"]}> {title} </h2>
              <button className={styles["close"]} onClick={() => close()}>
                <img src={closeBtn} alt="close" />
              </button>
            </header>
            <main className={styles["modal_content"]}> {children} </main>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
