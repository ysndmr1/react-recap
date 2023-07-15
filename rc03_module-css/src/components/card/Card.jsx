import Buton from "../buton/Buton";
import CardStyle from "./Card.module.css";

const Card = ({ language, img, btnName }) => {
  return (
    <div>
      <h1 className={CardStyle.title}>{language}</h1>
      <img className={CardStyle.images} src={img} alt="" />
      <Buton btnName={btnName} />
    </div>
  );
};

export default Card;
