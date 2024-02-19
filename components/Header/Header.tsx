import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import SignIn from "../Form/SignIn";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [showProfile, setShowProfile] = useState(false);
  const [showLinkLast, setShowLinkLast] = useState(true);
  const [showLinkLast1, setShowLinkLast1] = useState(false);

  const handleHeadProfile = () => {
    setShowProfile(!showProfile);
  };
  const handleClickOutsideProfile = (e: any) => {
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

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleForm = () => {
    setShowForm(!showForm);
    setShowLinkLast(false);
    setShowLinkLast1(!showForm);
  };

  const handleLinkClick = (linkName: any) => {
    setActiveLink(linkName);
  };

  const handleClickOutsideForm = (e: any) => {
    if (
      showForm &&
      !e.target.closest(`.${styles.linksLast}`) &&
      !e.target.closest(`.${styles.popContainer}`)
    ) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideForm);

    return () => {
      document.removeEventListener("click", handleClickOutsideForm);
    };
  }, [showForm]);

  return (
    <>
      <div className={styles.headerMainDiv}>
        <div className={styles.headerContainer}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  {/* Dalle-3 */}
                  <img src="logo.png" />
                </a>
              </Link>
            </div>
            <div className={styles.menuIcon} onClick={handleMenuToggle}>
              <FaBars />
            </div>

            <div className={styles.linksMain}>
              <div className={styles.linksFirst}>
                <Link href="/">
                  <p>Home</p>
                </Link>
                <Link href="/explore">
                  <p>Explore</p>
                </Link>
                <Link href="/pricing">
                  <p>Pricing</p>
                </Link>
              </div>
              <div
                className={styles.linksLast}
                onClick={handleForm}
                style={{ display: showLinkLast ? "flex" : "none" }}
              >
                <Link href="">
                  <p>Sign In</p>
                </Link>
                <div className={styles.actions}>
                  <Link href="">
                    <p className={styles.joinButton}>Download App</p>
                  </Link>
                </div>
              </div>
              <div
                className={styles.linksLast1}
                style={{ display: showLinkLast1 ? "flex" : "none" }}
              >
                <div className={styles.actions}>
                  <Link href="/imggeneration">
                    <p className={styles.joinButton}>Generate Art</p>
                  </Link>
                </div>
                <div className={styles.linksProfile}>
                  <div className={styles.profileImg}>
                    <Link href="/profile">
                      <img src="/profilehead.png" />
                    </Link>
                  </div>
                  <div
                    className={styles.profileHead}
                    onClick={handleHeadProfile}
                  >
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
            </div>
            {menuOpen && (
              <div className={styles.linksMainOpen}>
                <div className={styles.linksFirst}>
                  <Link href="/">
                    <p
                      className={activeLink === "Home" ? styles.activeLink : ""}
                      onClick={() => handleLinkClick("Home")}
                    >
                      Home
                    </p>
                  </Link>
                  <Link href="/explore">
                    <p
                      className={
                        activeLink === "Explore" ? styles.activeLink : ""
                      }
                      onClick={() => handleLinkClick("Explore")}
                    >
                      Explore
                    </p>
                  </Link>
                  <Link href="/pricing">
                    <p
                      className={
                        activeLink === "Pricing" ? styles.activeLink : ""
                      }
                      onClick={() => handleLinkClick("Pricing")}
                    >
                      Pricing
                    </p>
                  </Link>
                </div>
                <div className={styles.linksLast} onClick={handleForm}>
                  <Link href="">
                    <p
                      className={
                        activeLink === "SignIn" ? styles.activeLink : ""
                      }
                      onClick={() => handleLinkClick("SignIn")}
                    >
                      Sign In
                    </p>
                  </Link>
                  <div className={styles.actions}>
                    <Link href="">
                      <p className={styles.joinButton}>Download App</p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
      {showForm && <SignIn />}
    </>
  );
};

export default Header;
