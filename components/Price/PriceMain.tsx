import React from "react";
import styles from "./price.module.scss";

const data = [
  {
    feather: "80 Feathers",
    price: "₹ 199",
    discount: "10% Off",
    detail: [
      "Faster Image Processing",
      "Countless Generation",
      "Use All Models",
    ],
    img: "/check.png",
  },
  {
    feather: "600 Feathers",
    price: "₹ 999",
    discount: "60% Off",
    detail: [
      "Faster Image Processing",
      "Countless Generation",
      "Use All Models",
      "No Ads",
    ],
    img: "/check.png",
  },
  {
    feather: "350 Feathers",
    price: "₹ 599",
    discount: "10% Off",
    detail: [
      "Faster Image Processing",
      "Countless Generation",
      "Use All Models",
    ],
    img: "/check.png",
  },
  {
    feather: "350 Feathers",
    price: "₹ 599",
    discount: "10% Off",
    detail: [
      "Faster Image Processing",
      "Countless Generation",
      "Use All Models",
    ],
    img: "/check.png",
  },
];

const PriceMain = () => {
  return (
    <>
      <div className={styles.priceMainDiv}>
        <div className={styles.priceContainer}>
          <div className={styles.priceHead}>
            <h2>Upgrade to Dalle Pro</h2>
            <p>Choose the Perfect Plan for You</p>
          </div>
          <div className={styles.priceSubDiv}>
            {data.map((item, index) => (
              <div className={styles.priceCardContent} key={index}>
                <div className={styles.priceCardHead}>
                  <img src="/feather1.png" alt="feather" />
                  <h3>{item.feather}</h3>
                </div>
                <h2>{item.price}</h2>
                <div className={styles.priceCardPrice}>
                  <p>{item.discount}</p>
                </div>
                <div className={styles.priceCardDetail}>
                  {item.detail.map((detailItem, detailIndex) => (
                    <div key={detailIndex}>
                      <img src={item.img} alt="check" />
                      <p>{detailItem}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.priceCardBuy}>
                  <p>Buy Now</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceMain;
