import React, { useState } from "react";
import styles from "./usefeedback.module.scss";
import {
  MdOutlineFileDownload,
  MdOutlineShare,
  MdDelete,
  MdOutlineClose,
} from "react-icons/md";

const UserFeedback = ({ onClose }) => {
  const [feedbackText, setFeedbackText] = useState("");
  const [close, setClose] = useState(true);

  const handleFeedbackSubmit = () => {
    // Add logic to handle feedback submission
    console.log("Feedback submitted:", feedbackText);
    // Clear the feedback textarea
    setFeedbackText("");
  };

  return (
    <>
      <div className={styles.userFeedMainDiv}>
        <div className={styles.userFeedContainer}>
          <div className={styles.userFeedSubDiv}>
            <div className={styles.closeIcon} onClick={onClose}>
              <MdOutlineClose />
            </div>
            <div className={styles.userFeedHead}>
              <h2>Your Feedback is Valuable</h2>
              <p>What do you think about us ?</p>
            </div>
            <div className={styles.userFeedText}>
              <textarea
                rows={8}
                placeholder="Write what you think about us ? "
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
            </div>
            <div className={styles.userFeedBtn}>
              <button type="submit" onClick={handleFeedbackSubmit}>
                Send Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFeedback;
