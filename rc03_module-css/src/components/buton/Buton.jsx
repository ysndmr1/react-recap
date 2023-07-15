import ButonStyle from "./Buton.module.css";
const Buton = ({ btnName }) => {
  return (
    <div className={ButonStyle.title}>
      <button className={ButonStyle["btn-blue"]}>{btnName} </button>
    </div>
  );
};

export default Buton;
