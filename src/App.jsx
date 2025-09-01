import "./App.css";
import Button from "./components/Button.jsx";

function App() {
  const handleButtonClick = () => {
    alert("Button Action");
  };

  return (
    <>
      <h1>React Application</h1>
      <Button text="Button Text" onClick={handleButtonClick} />
    </>
  );
}

export default App;
