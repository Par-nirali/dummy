import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./header2.module.scss";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import HeadProfile from "../HeadProfile/HeadProfile";
import { BsArrowLeft } from "react-icons/bs";

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // const [showForm, setShowForm] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHeadProfile = () => {
    setShowProfile(!showProfile);
  };
  const handleClickOutsideProfile = (e) => {
    if (
      showProfile &&
      !e.target.closest(`.${styles.profileHead}`) &&
      !e.target.closest(`.${styles.styleMoreMainDiv}`)
    ) {
      setShowProfile(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideProfile);

    return () => {
      document.removeEventListener("click", handleClickOutsideProfile);
    };
  }, [showProfile]);

  return (
    <>
      <div className={styles.headerMainDiv}>
        <div className={styles.headerContainer}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  {/* Dalle-3 */}
                  <BsArrowLeft />
                  {/* <img src="logo.png" /> */}
                </a>
              </Link>
            </div>
            <div className={styles.menuIcon} onClick={handleMenuToggle}>
              <FaBars />
            </div>
            {/* <div className={styles.linksMain}> */}
            <div className={styles.linksFirst}>
              <p>Image Generator</p>
              {/* <Link href="/">
                  <p>Home</p>
                </Link>
                <Link href="/explore">
                  <p>Explore</p>
                </Link>
                <Link href="/pricing">
                  <p>Pricing</p>
                </Link> */}
            </div>
            <div className={styles.linksLast1}>
              <div className={styles.linkLastFeather}>
                <img src="/feather1.png" alt="feather" />
                <p>12</p>
              </div>
              <div className={styles.actions}>
                <Link href="/join">
                  <p className={styles.joinButton}>Upgrade</p>
                </Link>
              </div>
              <div className={styles.linksProfile}>
                <div className={styles.profileImg}>
                  <Link href="/profile">
                    <img src="/profilehead.png" />
                  </Link>
                </div>
                <div className={styles.profileHead} onClick={handleHeadProfile}>
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
            {/* </div> */}
            {menuOpen && (
              <div className={styles.linksMainOpen}>
                <div className={styles.linksFirst}>
                  <Link href="/">
                    <p>Home</p>
                  </Link>
                  <Link href="/about">
                    <p>Explore</p>
                  </Link>
                  <Link href="/products">
                    <p>Pricing</p>
                  </Link>
                </div>
                <div className={styles.linksLast}>
                  <Link href="/products">
                    <p>Sign In</p>
                  </Link>
                  <div className={styles.actions}>
                    <Link href="/join">
                      <p className={styles.joinButton}>Download App</p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
      {showProfile && <HeadProfile />}
    </>
  );
};

export default Header2;
