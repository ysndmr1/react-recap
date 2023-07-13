import Msg from "./Msg";

const Person = ({ name, img, tel }) => {
  //   const { name, img, tel } = props;
  return (
    <div>
      {/* <h2>Hi my name is {name}</h2> */}
      <Msg name={name} />
      <img style={{ width: "300px" }} src={img} alt="" />
      <p>{tel}</p>
    </div>
  );
};
export default Person;
