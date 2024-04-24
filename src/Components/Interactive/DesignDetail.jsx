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
}) {
  return (
    <div className={styles.maindiv}>
      <div className={styles.img}>
        {insert ? <img src={graphic} /> : null}
        {insertUi ? <img src={uiux} /> : null}
        {insertMotion ? <img src={motion} /> : null}
        {insertVideo ? <img src={video} /> : null}
        {insertAnimation ? <img src={animation} /> : null}
        {inserteBay ? <img src={ebay} /> : null}
      </div>
    </div>
  );
}
