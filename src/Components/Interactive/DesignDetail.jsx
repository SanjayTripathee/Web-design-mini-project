import graphic from "../../Image/graphic.png";
import uiux from "../../Image/uiux.png";
import motion from "../../Image/motion.png";
import video from "../../Image/video.png";
import animation from "../../Image/animation.png";
import ebay from "../../Image/eBay.png";

export default function DesignDetail({ insert }) {
  return (
    <div>
      {insert ? <img src={graphic} /> : null}
      {/* {insert ? <img src={uiux} /> : Null} */}
    </div>
  );
}
