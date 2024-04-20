import styles from "./performance.module.css";
import image from "../../Image/performance.png";
export default function Performance() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <p>
        <b> Performance can refer</b> to the financial results and outcomes of
        an organization, investment, or asset over a specific period.
      </p>
    </div>
  );
}
