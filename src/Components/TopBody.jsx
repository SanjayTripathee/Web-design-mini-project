import styles from "./topbody.module.css";

export default function TopBody() {
  return (
    <div className={styles.topContainer}>
      <h1>Unlock your's Team</h1>
      <h1>
        <span className={styles.underline}>Potential</span> with our design
      </h1>
      <h1>Expertise</h1>
      <div class={styles.container}>
        <p class={styles.left_paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptates sequi quae eligendi porro perferendis praesentium corrupti
          ipsum nostrum dolor maxime plze check butn.
          <div className={styles.butnContainer}>
            <button className={styles.firstBtn}>BookaService</button>
            <button className={styles.secondBtn}>GetStarted</button>
          </div>
        </p>
      </div>
    </div>
  );
}
