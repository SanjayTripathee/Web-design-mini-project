import styles from "./cycle.module.css";
import security from "../../Image/security.png";
export default function Cycle() {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.secDeg} src={security} />
        <p className={styles.paragraph}>
          <b>Global security</b> is a relatively new concept, and conjures up
          images of relatively new concept, and conjures up security.
        </p>
      </div>
    </div>
  );
}
