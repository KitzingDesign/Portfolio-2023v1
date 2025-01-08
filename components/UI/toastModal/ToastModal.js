import styles from "./ToastModal.module.css";

const ToastModal = ({ message, buttonText, onButtonClick, onClose }) => {
  const handleButtonClick = () => {
    window.open("https://www.matmatmaten.com", "_blank");
  };

  return (
    <div className={styles.toasterModal}>
      <button className={styles.closeButton} onClick={onClose}>
        <img src="/closeIcon.svg" alt="Close" />
      </button>
      <div className={styles.content}>
        <img
          src="/matmatmatenImg.png"
          alt="Illustration"
          className={styles.image}
        />
        <div className={styles.textContent}>
          <h3>Hey There 👋</h3>
          <p>{message}</p>
          <button className={styles.actionButton} onClick={handleButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToastModal;
