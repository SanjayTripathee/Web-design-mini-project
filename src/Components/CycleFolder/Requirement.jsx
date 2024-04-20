import image from "../../Image/recqurement.png";
import styles from "./requirement.module.css";
export default function Requirement() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="" />
      <p className={styles.paragraph}>
        <b>Requirement</b> something is to have a need for it or to ask for it
        authoritatively. How does require compare to synonyms want, need, and
        lack? Find out on Thesaurus.com.
      </p>
    </div>
  );
}
