import styles from "./hrcounceler.module.css";
import image from "../../Image/hr.png";

export default function HrCouncel() {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.hr} src={image} alt="" />
        <p className={styles.paragraph}>
          <b>HR consulting</b> involves providing guidance, support, and
          expertise in various human resources matters within an organization.{" "}
        </p>
      </div>
    </div>
  );
}
