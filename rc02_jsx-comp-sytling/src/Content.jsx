import flower from "./img/flower.jpg";
import "./Content.css";

const Content = () => {
  const pStyle = {
    color: "white",
    backgroundColor: "blue",
    fontSize: "1.3rem",
  };
  const imgStyle = {
    display: "block",
    margin: "1rem auto",
    width: "400px",
  };

  return (
    <div className="content-div">
      <h2 style={{ color: "white", backgroundColor: "red" }}>React Js</h2>

      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam
        enim minima tenetur. Non, vitae?
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg"
        alt="summer"
      />
      <img style={imgStyle} src={flower} alt="flower" />
      <p className="par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem
        id veniam sit laudantium eos ab iste quasi error hic!
      </p>
      <p className="par ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vero
        soluta, inventore dicta non impedit architecto ut eum, ratione amet
        animi, similique accusamus facere molestias possimus veritatis enim
        dolorem sapiente.
      </p>
    </div>
  );
};

export default Content;
