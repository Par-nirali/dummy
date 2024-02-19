import React from "react";
import Link from "next/link";
import styles from "./home.module.scss";
import TemplateMain from "../Template/Template";

const HomeMain = () => {
  return (
    <>
      <div className={styles.homeMainDiv}>
        <div className={styles.homeContainer}>
          <section id={styles.contentMainId}>
            <div className={styles.contentMainContainer}>
              <div className={styles.contentSubDiv}>
                <div className={styles.contentFeatherBig}>
                  <img src="feather.png" alt="robo" />
                </div>
                <h2>
                  Transforming Words into <span>Images</span>
                </h2>
                <p>
                  Welcome to Dalle-3, where your words take flight. Turn your
                  thoughts, quotes and stories into captivating visuals with our
                  intuitive image generation tool.
                </p>
                <div className={styles.PromptMain}>
                  {/* <p>Enter you prompt</p> */}
                  <input type="text" placeholder="Enter your prompt" />
                  <div className={styles.actions}>
                    <Link href="/imggeneration">
                      <p className={styles.joinButton}>Generate</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.contentRobo}>
                  <img src="robo.png" alt="robo" />
                </div>
              </div>
            </div>
          </section>
          {/* <section id={styles.galleryMainId}>
            <div className={styles.galleryContainer}>
              <TemplateMain />
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default HomeMain;
