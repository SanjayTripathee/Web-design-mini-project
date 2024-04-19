import styles from "./showimg.module.css";
import Structure from "../Image/side.png";
export default function ShowImg() {
  return (
    <div>
      <img className={styles.imgSize} src={Structure} alt="" />
    </div>
  );
}
