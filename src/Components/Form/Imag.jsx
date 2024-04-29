import image from "../../Image/submit.png";
import style from "./imag.module.css";
export default function Imag() {
  return (
    <div className={StylePropertyMap.maindiv}>
      <img className={style.img} src={image} alt="" />
    </div>
  );
}
