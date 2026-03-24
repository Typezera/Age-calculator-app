import Calculadora from "./components/calculator";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="w-[500px]">
        <Calculadora />
      </div>
    </div>
  );
}

export default App;
