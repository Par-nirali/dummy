import React from "react";
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
      "/imod1.png",
      "/imod2.png",
      "/imod3.png",
      "/imod2.png",
      "/imod3.png",
      "/imod2.png",
      "/imod3.png",
      "/imod2.png",
      "/imod3.png",
      "/imod2.png",
      "/imod3.png",
    ],
  },
];

const StyleModel = () => {
  return (
    <>
      <div className={styles.styleMoreMainDiv1}>
        <div className={styles.styleMoreContainer1}>
          <div className={styles.styleMoreSubDiv}>
            <div className={styles.styleMoreUp}>
              <p>Models</p>
              <MdOutlineClose />
            </div>
            <div className={styles.styleMoreCenter}>
              <input type="text" placeholder="Search Models" />
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
    </>
  );
};

export default StyleModel;
