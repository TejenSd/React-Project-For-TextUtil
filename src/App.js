import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* here title is a props which will make the navbar text as dynamic*/}
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3" >
        <TextForm heading = "Enter your text to analyze below" />
      </div>
    </>
  );
}

export default App;
