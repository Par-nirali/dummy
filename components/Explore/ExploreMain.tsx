import React from "react";
import styles from "./explore.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import TemplateMain from "../Template/Template";

const ExploreMain = () => {
  return (
    <>
      <div className={styles.exploreMainDiv}>
        <div className={styles.exploreContainer}>
          <div className={styles.exploreUpMain}>
            <div className={styles.exploreUpSearch}>
              <div>
                <IoSearchOutline />
              </div>
              {/* <textarea>Search</textarea> */}
              <input type="text" placeholder="Search" />
            </div>
            <div className={styles.exploreUpOpt}>
              <div>
                <p>Animals</p>
              </div>
              <div>
                <p>Persons</p>
              </div>
              <div>
                <p>Anime</p>
              </div>
              <div>
                <p>Fashion</p>
              </div>
              <div>
                <p>Food</p>
              </div>
            </div>
          </div>
          <div className={styles.exploreBtmMain}>
            <TemplateMain />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMain;
