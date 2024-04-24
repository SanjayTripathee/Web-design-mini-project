import styles from "./design.module.css";
import DesignDetail from "./DesignDetail";
import { useState } from "react";

export default function Design({
  toggleImage,
  toggleImageUi,
  toggleImageMotion,
  toggleImageVideo,
  toggleImageAnimation,
  toggleImageeBay,
}) {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.paragraph}>
        <b>We have diverse pool of</b>

        <span className={styles.worddesign}> services</span>
      </p>
      <div className={styles.maindivofBtn}>
        <div className={styles.firstRowbtn}>
          <button onClick={toggleImage} className={styles.graphicBtn}>
            Graphic Design
          </button>

          <button onClick={toggleImageUi} className={styles.uiuxbtn}>
            UI/UX Design
          </button>
        </div>
        <div className={styles.secondRowbtn}>
          <button onClick={toggleImageMotion} className={styles.Motion}>
            Motion Design
          </button>
          <button onClick={toggleImageVideo} className={styles.vidioedit}>
            Video Edeting
          </button>
        </div>
        <div className={styles.thirdRowbtn}>
          <button onClick={toggleImageAnimation} className={styles.Animate}>
            Animation
          </button>
          <button onClick={toggleImageeBay} className={styles.eBay}>
            eBayStore Design
          </button>
        </div>
      </div>
    </div>
  );
}
