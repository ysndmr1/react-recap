//**** */
//**** */
//**** */
//**** */

import Msg from "./Msg";

const Person = ({ name, tel, img }) => {
  // const { name, tel, img } = props;
  return (
    <div>
      {/* <h2>Hi, My name {name} </h2> */}
      <Msg name={name} />
      <img style={{ width: "300px" }} src={img} alt="" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
