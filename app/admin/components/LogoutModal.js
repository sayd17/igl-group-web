// components/LogoutModal.js
import React from "react";
import styles from "./styles/logoutModal.module.css";

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to log out?</p>
        <div className={styles.modalButtons}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.logoutBtn} onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
