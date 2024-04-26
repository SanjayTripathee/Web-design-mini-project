import styles from "./navbar.module.css";

import Recgn from "../Image/index.png";
export default function App() {
  return (
    <div className={styles.mainContaier}>
      <div className={styles.navbarContainer}>
        <img className={styles.img} src={Recgn} alt="" />

        <div className={styles.middleContainer}>
          <div className={styles.service}>
            {<label>Service</label>}
            {
              <select id="select">
                {/* {<option>FrontEnd-site</option>}
          {<option>BackEnd-site</option>}
          {<option>Fullstack-site</option>} */}
              </select>
            }
          </div>

          <div className={styles.industery}>Industry</div>
          <div className={styles.tech}>Technologies</div>
          <div className={styles.protfolio}>Portfolio</div>
          <div className={styles.carier}>Careers</div>
          <div className={styles.about}>About us</div>
        </div>

        <button className={styles.butn}>BookaCall</button>
      </div>
    </div>
  );
}
