import image from "../../Image/firebrush.png";
import styles from "./firebrush.module.css";
export default function Firebrush() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="" />
    </div>
  );
}
