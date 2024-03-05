import "./App.css";
import Header from "./components/TitleHeader/TitleHeader";
import ItemsDisplay from "./components/ObjectsListBody/ObjectsListBody";
import Divider from "./components/Divider/Divider";

function App() {
  return (
    <div>
      <Header />
      <Divider />
      <ItemsDisplay />
    </div>
  );
}

export default App;
