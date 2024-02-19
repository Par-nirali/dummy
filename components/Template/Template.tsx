"use client";
import React, { useState, useEffect } from "react";
import styles from "./template.module.scss";

import { Gallery } from "react-grid-gallery";
import LightGallery from "lightgallery/react";

import Link from "next/link";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const images = [
  {
    src: "/g7.png",
    width: "auto",
    height: "auto",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "g10.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g10.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g1.png",
    width: "auto",
    height: "auto",
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    // alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "g11.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g11.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g3.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g2.png",
    width: "auto",
    height: "auto",
  },

  {
    src: "g6.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g6.png",
    width: "auto",
    height: "auto",
  },

  {
    src: "g3.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g12.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g12.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g4.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g5.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g5.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g9.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g8.png",
    width: "auto",
    height: "auto",
  },
  {
    src: "g8.png",
    width: "auto",
    height: "auto",
  },
];

const TemplateMain = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState("foryou");

  const handleSelectedOption = (choice) => {
    setSelectedOption(choice);
  };

  useEffect(() => {
    handleSelectedOption("foryou");
  }, []);

  const handleImageClick = (index, image) => {
    setSelectedImageIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedImageIndex(null);
  };

  // const handleClickOutsideProfile = (event) => {
  //   if (
  //     selectedImageIndex &&
  //     !event.target.closest(`.${styles.templateGalleryMainImg}`) &&
  //     !event.target.closest(`.${styles.headerCardMainDiv}`)
  //   ) {
  //     setSelectedImageIndex(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutsideProfile);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutsideProfile);
  //   };
  // }, [selectedImageIndex]);

  return (
    <>
      <div className={styles.headerTemplateMainDiv}>
        <div className={styles.headerTemplateContainer}>
          <div className={styles.templateGalleryMain}>
            {/* <Gallery images={images} onClick={handleImageClick} /> */}
            <LightGallery
              // onInit={onInit}
              speed={500}
              getCaptionFromTitleOrAlt={false}
              getCaptionFromTitleOrAlt={true}
              // plugins={[
              //   lgThumbnail,
              //   lgZoom,
              //   lgAutoplay,
              //   lgFullscreen,
              //   lgRotate,
              //   lgShare,
              // ]}
            >
              {images.map((image, index) => {
                return (
                  <a href={image.src} key={index}>
                    <img
                      className={styles.templateGalleryMainImg}
                      src={image.src}
                      onClick={() => handleImageClick(index, image)}
                    />
                  </a>
                );
              })}
            </LightGallery>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateMain;
