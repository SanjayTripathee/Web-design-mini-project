import image from "../../Image/teaching.png";
import img from "../../Image/teach.png";
import style from "./modlesideimage.module.css";
export default function ModleSideImage() {
  return (
    <div className={style.mainDiv}>
      <img className={style.img} src={image} />
      <img className={style.image} src={img} />
    </div>
  );
}
