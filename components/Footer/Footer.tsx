"use client";
import React, { useEffect, useState } from "react";
import UserFeedback from "../UserFeedback/UserFeedback";
import style from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import styles from "../../styles/style";
import CustomerSup from "../CustomerSupport/CustomerSup";
// import styles from "@/styles/style";
// import { usePathname } from "next/navigation";

const Footer = () => {
  //   const pathname = usePathname();
  //   const names = pathname.split("/");
  //   const [userDetail, setUserDetail] = useState<any>("");
  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  //       setUserDetail(userData);
  //     }
  //   }, []);

  const [showFeedback, setShowFeedback] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const handleUserFeedback = () => {
    setShowFeedback(!showFeedback);
  };
  const handleCustomerSupport = () => {
    setShowSupport(!showSupport);
  };
  // console.log("clicked", handleCustomerSupport);

  const handleCloseUserFeedback = () => {
    setShowFeedback(false);
  };
  return (
    <>
      <div className={style.footerMainDiv}>
        <footer
          id="contactUs"
          className={`${style.container} ${styles.paddingY} ${styles.paddingX}`}
        >
          <div className={style.footerContainer}>
            <div className={style.footerDetails}>
              <Link href="/" className={style.imgService}>
                <img
                  src="logo.png"
                  alt="logo"
                  //   width={"110px"}
                  //   style={{ paddingBottom: "10px" }}
                />
              </Link>
              <p>
                Our platform empowers you to visually represent your ideas in
                stunning imagery.
              </p>
              <div
                className={style.socialIconsDiv}
                // style={{ alignItems: "center", paddingBottom: "30px" }}
              >
                <img src="fb.svg" alt="" />
                <img src="linkedin.svg" alt="" />
                <img src="twitter.svg" alt="" />
              </div>
            </div>

            <div className={style.footerMenuDiv}>
              <div>
                <h3>Contact Us</h3>
                <li>
                  <Link
                    href=""

                    //   style={{
                    //     fontWeight: names[1] === "products" ? "700" : "",
                    //     color: names[1] === "products" ? "white" : "inherit",
                    //   }}
                  >
                    <p
                      onClick={handleCustomerSupport}
                      className={style.customerSupport}
                    >
                      Customer Support
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <p
                      onClick={handleUserFeedback}
                      className={style.feedBackBtn}
                    >
                      User Feedback
                    </p>
                  </Link>
                </li>
              </div>
              <div>
                <h3>Our Links</h3>
                <li>
                  <Link href="/privacy_policy">Home</Link>
                </li>
                <li>
                  <Link href="/TermsandConditions">Pricing</Link>
                </li>
                <li>
                  <Link href="/TermsandConditions">Explore</Link>
                </li>
              </div>
            </div>
            <div className={style.footerContactDiv}>
              <div>
                <h3>Get Our Apps</h3>
                <div className={style.storesLogo}>
                  <div>
                    <img src="/apple.svg" width={"100%"} />
                  </div>
                  <div>
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
          <div className={style.borderTopDiv}>
            <div className={style.footerContainerBottom}>
              <div className={style.copyRightsText}>
                <p>© 2023 by Dalle-3. All right reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {showFeedback && <UserFeedback onClose={handleCloseUserFeedback} />}
      {showSupport && <CustomerSup />}
    </>
  );
};
export default Footer;
