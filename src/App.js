import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMore from "./components/LoadMore/LoadMore";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";
import MenuContainer from "./components/treeView/MenuContainer";
import QRCodeGenerator from "./components/QRcode/QRCode";
import ScrollIndicator from "./components/scrollPosition/ScrollIndicator";
import TabPage from "./components/tabPage/TabPage";

function App() {
  return (
    <div className="App">
      <ScrollIndicator />
      <TabPage>
        <Accordion />
        <RandomColor />
        <StarRating />
        <ImageSlider length="{5}" />
        <LoadMore />
        <MenuContainer />
        <QRCodeGenerator />
      </TabPage>
    </div>
  );
}

export default App;
