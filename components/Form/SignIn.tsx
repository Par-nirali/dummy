import React, { useState, useEffect } from "react";
import styles from "./signin.module.scss";
import Link from "next/link";
import { FaGoogle, FaApple, FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";

// import { RxCrossCircled } from "react-icons/rx";

const SignIn = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formDetail}>
          <div className={styles.fromMainDetails}>
            <div className={styles.fromMainLeft}>
              <div className={styles.formSubLeft}>
                <div className={styles.fromSubLeftImg}>
                  <img src="/feather1.png" className={styles.formLeftImg} />
                  <h2>Dalle-3</h2>
                </div>
                <div className={styles.formLeftCenter}>
                  <p className={styles.formLeftCenterHead}>
                    Sign Up or Login with Google
                  </p>
                  <div>
                    <FaGoogle />
                    <p>Login with Google</p>
                  </div>
                  <div>
                    <IoLogoApple />
                    <p>Login with Apple</p>
                  </div>
                </div>
                <div className={styles.formLeftBottom}>
                  <p className={styles.formLeftBottomHead}>
                    Available on both Platform IOS and Android
                  </p>
                  <div className={styles.formLeftBottomSub}>
                    <div className={styles.formLeftBottomApple}>
                      <Link
                        href="https://play.google.com/store/apps/details?id=zooq.nfc.digital.businesscard.personal.network.nfcproducts"
                        target="_blank"
                      >
                        <img src="/apple.svg" width={"100%"} />
                      </Link>
                    </div>
                    <div className={styles.formLeftBottomGoogle}>
                      <Link
                        href="https://play.google.com/store/apps/details?id=zooq.nfc.digital.businesscard.personal.network.nfcproducts"
                        target="_blank"
                      >
                        <img src="/google.svg" width={"100%"} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formMainRight}>
              <div>
                <img src="signinbg.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
