import QRCode from "react-qr-code";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMore from "./components/LoadMore/LoadMore";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";
import MenuContainer from "./components/treeView/MenuContainer";
import sideMenu from "./Datas/treeData";
import QRCodeGenerator from "./components/QRcode/QRCode";
import ScrollIndicator from "./components/scrollPosition/ScrollIndicator";

function App() {
  return (
    <div className="App">
      <ScrollIndicator />
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider length="{5}" />
      <LoadMore />
      <MenuContainer />
      <QRCodeGenerator />
    </div>
  );
}

export default App;
