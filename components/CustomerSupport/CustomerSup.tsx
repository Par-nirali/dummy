import React from "react";
import styles from "./customersupport.module.scss";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

const CustomerSup = () => {
  return (
    <>
      <div className={styles.customerSupMainDiv}>
        <div className={styles.customerSupContainer}>
          <div className={styles.customerSupSubDiv}>
            <div className={styles.customerSupHead}>
              <h2>Customer Support</h2>
              <p>Talk with Our Team</p>
            </div>
            <div className={styles.customerSupText}>
              <div className={styles.customerSubInfo}>
                <div className={styles.contactIcon}>
                  <IoMailUnreadOutline />
                </div>
                <p>Email Us</p>
              </div>
              <div className={styles.customerSubInfo}>
                <div className={styles.messageIcon}>
                  <MdOutlineMessage />
                </div>
                <p>Message Us</p>
              </div>
            </div>
            <div className={styles.customerSupBtn}>
              <button type="submit">Send Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSup;
