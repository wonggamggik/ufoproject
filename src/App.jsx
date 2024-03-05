import "./App.css";
import Header from "./components/TitleHeader/TitleHeader";
import ItemsDisplay from "./components/ObjectsListBody/ObjectsListBody";
import Divider from "./components/Divider/Divider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Divider reverse={false} />
      <ItemsDisplay />
      <Divider reverse={true} />
      <Footer />
    </div>
  );
}

export default App;
