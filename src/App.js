import "./App.css";

import Fileupload from "./components/Fileupload";
function App() {
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        height: "800px",
        width: "100%",
        border: "3px solid #757575",
      }}
      className="App"
    >
      <Fileupload />
    </div>
  );
}

export default App;
