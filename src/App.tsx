import { Chart } from "./components/chart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main className="flex m-auto justify-center md:w-1/2 w-full	">
      <Chart />
      <ToastContainer />
    </main>
  );
}

export default App;
