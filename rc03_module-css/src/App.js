import Card from "./components/card/Card";
import data from "./utils/data";
function App() {
  return (
    <>
      {data.map(({ id, language, img, btnName }) => (
        <Card key={id} language={language} img={img} btnName={btnName} />
      ))}
    </>
  );
}

export default App;
