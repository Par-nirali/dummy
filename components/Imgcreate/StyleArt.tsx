import React, { useState } from "react";
import styles from "./stylemore.module.scss";
import {
  MdOutlineFileDownload,
  MdOutlineShare,
  MdDelete,
  MdOutlineClose,
} from "react-icons/md";
import Link from "next/link";

const imgRecent = [
  {
    img: [
      "/rec1.png",
      "/rec2.png",
      "/rec3.png",
      "/rec4.png",
      "/rec5.png",
      "/rec6.png",
      "/rec1.png",
      "/rec2.png",
      "/rec3.png",
      "/rec4.png",
    ],
  },
];

const StyleArt = () => {
  const [showModel, setShowModel] = useState(true);

  const closeModelMore = () => {
    setShowModel(false);
  };

  return (
    <>
      {/* {showModel && ( */}
      <div className={styles.styleMoreMainDiv}>
        <div className={styles.styleMoreContainer}>
          <div className={styles.styleMoreSubDiv}>
            <div className={styles.styleMoreUp}>
              <p>Art Styles</p>
              <MdOutlineClose
              // onClick={closeModelMore}
              />
            </div>
            <div className={styles.styleMoreCenter}>
              <input type="text" placeholder="Search Styles" />
            </div>
            {imgRecent.map((item, index) => (
              <div className={styles.styleMoreBottom} key={index}>
                <div className={styles.styleMoreImg}>
                  {item.img.map((imgSrc, imgIndex) => (
                    <img key={imgIndex} src={imgSrc} alt="" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default StyleArt;
