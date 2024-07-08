import graphic from "../../Image/graphic.png";
import uiux from "../../Image/uiux.png";
import motion from "../../Image/motion.png";
import video from "../../Image/video.png";
import animation from "../../Image/animation.png";
import ebay from "../../Image/eBay.png";
import styles from "./designdetail.module.css";

export default function DesignDetail({
  insert,
  insertUi,
  insertMotion,
  insertVideo,
  insertAnimation,
  inserteBay,
  myImage,
}) {
  return (
    <div className={styles.maindiv}>
      <div className={styles.img}>
        {/* {insert ? (
          <img src={graphic} />
        ) : (
          <span className={styles.paragr}>Click Button To view Detail</span>
        )} */}

        {myImage === "insertUi" ? (
          <img src={uiux} />
        ) : myImage === "insertMotion" ? (
          <img src={motion} />
        ) : myImage === "insertVideo" ? (
          <img src={video} />
        ) : myImage === "insertAnimation" ? (
          <img src={animation} />
        ) : myImage === "inserteBay" ? (
          <img src={ebay} />
        ) : myImage === "insert" ? (
          <img src={graphic} />
        ) : null}

        {/* 
        {insertUi ? <img src={uiux} /> : insert}
        {insertMotion ? <img src={motion} /> : insert}
        {insertVideo ? <img src={video} /> : insert}
        {insertAnimation ? <img src={animation} /> : insert}
        {inserteBay ? <img src={ebay} /> : insert} */}
      </div>
    </div>
  );
}
