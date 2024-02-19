import React, { useState, useEffect } from "react";
import styles from "./imggenerate.module.scss";
import {
  MdOutlineFileDownload,
  MdOutlineShare,
  MdDelete,
  MdOutlineClose,
} from "react-icons/md";
import { AiOutlineFullscreen } from "react-icons/ai";
import { HiOutlineMicrophone, HiOutlineLightBulb } from "react-icons/hi";
import { symlink } from "fs";
import StyleArt from "./StyleArt";
import StyleModel from "./StyleModel";

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

const ImgGenerate = () => {
  const [showArtMore, setShowArtMore] = useState(false);
  const [showModelMore, setShowModelMore] = useState(false);

  const handleStyleArtMore = () => {
    setShowArtMore(!showArtMore);
  };

  const handleStyleModelMore = () => {
    setShowModelMore(!showModelMore);
  };

  const handleClickOutsideModelMore = (e) => {
    if (
      showModelMore &&
      !e.target.closest(`.${styles.imgGenLeftMore}`) &&
      !e.target.closest(`.${styles.styleMoreMainDiv1}`)
    ) {
      setShowModelMore(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideModelMore);

    return () => {
      document.removeEventListener("click", handleClickOutsideModelMore);
    };
  }, [showModelMore]);

  const handleClickOutsideArtMore = (event) => {
    if (
      showArtMore &&
      !event.target.closest(`.${styles.imgGenLeftMore}`) &&
      !event.target.closest(`.${styles.styleMoreMainDiv}`)
    ) {
      setShowArtMore(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideArtMore);

    return () => {
      document.removeEventListener("click", handleClickOutsideArtMore);
    };
  }, [showArtMore]);

  return (
    <>
      <div className={styles.imgGenMainDiv}>
        <div className={styles.imgGenContainer}>
          <div className={styles.imgGenSubDiv}>
            <div className={styles.imgGenLeftMain}>
              <div className={styles.imgGenLeft1}>
                <div className={styles.imgGenLeft1Up}>
                  <p className={styles.imgGenLeftText}>
                    Select Art Styles &nbsp;
                    <span>
                      <em>i</em>
                    </span>
                  </p>
                  <p
                    className={styles.imgGenLeftMore}
                    onClick={handleStyleArtMore}
                  >
                    More
                  </p>
                </div>
                <div className={styles.imgGenLeft1Btm}>
                  <div className={styles.imgGenLeftImg}>
                    <img src="/imart1.png" alt="" />
                  </div>
                  <div className={styles.imgGenLeftImg}>
                    <img src="/imart2.png" alt="" />
                  </div>
                  <div className={styles.imgGenLeftImg}>
                    <img src="/imart3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.imgGenLeft1}>
                <div className={styles.imgGenLeft1Up}>
                  <p className={styles.imgGenLeftText}>
                    Styles Models &nbsp;
                    <span>
                      <em>i</em>
                    </span>
                  </p>
                  <p
                    className={styles.imgGenLeftMore}
                    onClick={handleStyleModelMore}
                  >
                    More
                  </p>
                </div>
                <div className={styles.imgGenLeft1Btm}>
                  <div className={styles.imgGenLeftImg}>
                    <img src="/imod1.png" alt="" />
                  </div>
                  <div className={styles.imgGenLeftImg}>
                    <img src="/imod2.png" alt="" />
                  </div>
                  <div className={styles.imgGenLeftImg}>
                    <img src="/imod3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.imgGenLeft2}>
                <div className={styles.imgGenLeft2Up}>
                  <p className={styles.imgGenLeftText}>
                    Aspect Ratio &nbsp;
                    <span>
                      <em>i</em>
                    </span>
                  </p>
                </div>
                <div className={styles.imgGenLeft2Btm}>
                  <div className={styles.imgGenLeftSqr}>
                    <p></p>
                    <span>Square</span>
                  </div>
                  <div className={styles.imgGenLeftLand}>
                    <p></p>
                    <span>LandScape</span>
                  </div>
                  <div className={styles.imgGenLeftPort}>
                    <p></p>
                    <span>Portrait</span>
                  </div>
                  <div className={styles.imgGenLeftWide}>
                    <p></p>
                    <span>Wide</span>
                  </div>
                  <div className={styles.imgGenLeftTall}>
                    <p></p>
                    <span>Tall</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.imgGenCenterMain}>
              <div className={styles.imgGenCenterUp}>
                <div className={styles.imgGenRightImg}>
                  <img src="/imgc.png" alt="imgcenter" />
                </div>
                <div className={styles.imgGenRightOpt}>
                  <div>
                    <MdOutlineFileDownload />
                  </div>
                  <div>
                    <MdOutlineShare />
                  </div>
                  <div>
                    <MdDelete />
                  </div>
                  <div>
                    <AiOutlineFullscreen />
                  </div>
                </div>
              </div>
              <div className={styles.imgGenCenterBtm}>
                <div className={styles.imgGenCenterDes}>
                  <MdOutlineClose />
                </div>
                <p className={styles.imgGenCenterDesText}>
                  Describe your Image you want to Generate
                </p>
                <div className={styles.imgGenCenterLast}>
                  <div className={styles.imgGenCenterIcons}>
                    <HiOutlineMicrophone />
                    <HiOutlineLightBulb />
                  </div>
                  <div className={styles.imgGenCenterBtn}>
                    <p>Generate</p>
                    <img src="/feather1.png" alt="feather" />
                  </div>
                </div>
              </div>
            </div>
            {imgRecent.map((item, index) => (
              <div className={styles.imgGenRightMain} key={index}>
                <p>Recents</p>
                <div className={styles.imgGenRightImg}>
                  {item.img.map((imgSrc, imgIndex) => (
                    <img key={imgIndex} src={imgSrc} alt="img" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showArtMore && <StyleArt />}
      {showModelMore && <StyleModel />}
    </>
  );
};

export default ImgGenerate;
