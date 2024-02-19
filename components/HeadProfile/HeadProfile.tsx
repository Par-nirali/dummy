import React from "react";
import styles from "./headprofile.module.scss";
import { MdOutlineClose } from "react-icons/md";

const HeadProfile = () => {
  return (
    <>
      <div className={styles.headProMainDiv}>
        <div className={styles.headProContainer}>
          <div className={styles.headProSubDiv}>
            <div className={styles.headProTop}>
              <div className={styles.headProDetailImg}>
                <img src="/headpro.png" alt="headpro" />
              </div>
              <div className={styles.headProDetailName}>
                <h2>Scarlett Johansson</h2>
                <p>scarlettjohansson@gmail.com</p>
              </div>
            </div>
            <div className={styles.headProCenter}>
              <h2>General</h2>
              <div className={styles.headProCenterText}>
                <p>Profile</p>
              </div>
              <div className={styles.headProCenterText}>
                <p>Current Plan</p>
                <p>Free</p>
              </div>
              <div className={styles.headProCenterText}>
                <p>Prompts Remaining</p>
                <p>100</p>
              </div>
              <div className={styles.headProCenterBtn}>
                <button>Upgrade</button>
              </div>
            </div>
            <div className={styles.headProBottom}>
              <h2>Other</h2>
              <div className={styles.headProBottomText}>
                <p>Terms of Use</p>
              </div>
              <div className={styles.headProBottomText}>
                <p>User Feedback</p>
              </div>
              <div className={styles.headProBottomText}>
                <p>Customer Support</p>
              </div>
              <div className={styles.headProBottomBtn}>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadProfile;
