import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMore from "./components/LoadMore/LoadMore";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider length="{5}" />
      <LoadMore />
    </div>
  );
}

export default App;
