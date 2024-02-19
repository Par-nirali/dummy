import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./profile.module.scss";
import TemplateMain from "../Template/Template";
import { IoIosArrowDown } from "react-icons/io";
import LikedImages from "./LikedImages";
import Editprofile from "./Editprofile";

const ProfileMain = () => {
  const [selectedOption, setSelectedOption] = useState("likedimg");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    handleOptionClick("likedimg");
  }, []);

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "likedimg":
        return <LikedImages />;
      case "editprofile":
        return <Editprofile />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className={styles.profileMainDiv}>
        <div className={styles.profileContainer}>
          <div className={styles.profileTopMain}>
            <div className={styles.profileTopLeft}>
              <div className={styles.profileTopLeftImg}>
                <img src="profile.png" alt="profile" />
              </div>
              <div className={styles.profileTopLeftText}>
                <h2>Scarlett Johansson</h2>
                <p>scarlettjohansson@gmail.com</p>
              </div>
            </div>
            <div className={styles.profileTopRight}>
              <div>
                <h2>234</h2>
                <p>Images Generated</p>
              </div>
              <div>
                <h2>567</h2>
                <p>Images Downloaded</p>
              </div>
              <div>
                <h2>567</h2>
                <p>Images Liked</p>
              </div>
            </div>
          </div>
          {/* <div className={styles.profileCategory}> */}
          <div className={styles.profileCenterMain}>
            <div className={styles.profileCenterOpt}>
              <Link href="">
                <p
                  onClick={() => handleOptionClick("likedimg")}
                  className={
                    selectedOption === "likedimg" ? styles.selectedOption : ""
                  }
                >
                  Liked
                </p>
              </Link>
              <Link href="">
                <p
                  onClick={() => handleOptionClick("created")}
                  className={
                    selectedOption === "created" ? styles.selectedOption : ""
                  }
                >
                  Created
                </p>
              </Link>
              <Link href="">
                <p
                  onClick={() => handleOptionClick("download")}
                  className={
                    selectedOption === "download" ? styles.selectedOption : ""
                  }
                >
                  Downloaded
                </p>
              </Link>
              <Link href="">
                <p
                  onClick={() => handleOptionClick("editprofile")}
                  className={
                    selectedOption === "editprofile"
                      ? styles.selectedOption
                      : ""
                  }
                >
                  Edit Profile
                </p>
              </Link>
            </div>
            <div className={styles.profileCenterPopular}>
              <Link href="">
                <div>
                  <p>Recents</p>
                  <IoIosArrowDown />
                </div>
              </Link>
            </div>
            {/* </div> */}
          </div>
          <div className={styles.profileBottomMain}>
            {renderSelectedComponent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMain;
