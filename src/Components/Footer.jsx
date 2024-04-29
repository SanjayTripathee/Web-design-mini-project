import image from "../Image/footer.png";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <div className={style.Footer}>
      <img className={style.img} src={image} alt="" />
    </div>
  );
}
