import TopBody from "./Components/TopBody.jsx";
import Navbar from "./Components/Navbar.jsx";
import Container from "./Components/Container.jsx";
import InnerContainer from "./Components/InnerContainer.jsx";
import ShowImg from "./Components/ShowImg.jsx";
import Cycle from "./Components/CycleFolder/Cycle.jsx";
import HrCouncel from "./Components/CycleFolder/HrCouncel.jsx";
import Performance from "./Components/CycleFolder/Performance.jsx";
import Requirement from "./Components/CycleFolder/Requirement.jsx";
import Firebrush from "./Components/CycleFolder/Firebrush.jsx";
import Design from "./Components/Interactive/Design.jsx";
import { useState } from "react";
import DesignDetail from "./Components/Interactive/DesignDetail.jsx";
import Model from "./Components/Interactive/Model.jsx";
import "./app.css";
import ModleSideImage from "./Components/Interactive/ModleSideImage.jsx";
import Form from "./Components/Form/Form.jsx";
import Imag from "./Components/Form/Imag.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  const [insert, setInsert] = useState(false);
  const [insertUi, setInsertUi] = useState(false);
  const [insertMotion, setInsertMotion] = useState(false);
  const [insertVideo, setInsertVideo] = useState(false);
  const [insertAnimation, setInsertAnimation] = useState(false);
  const [inserteBay, setInserteBay] = useState(false);
  const [myImage, setMyImage] = useState("");

  const toggleImage = () => {
    setInsert(!insert);
    setMyImage("insert");
  };
  const toggleImageUi = () => {
    setInsertUi(!insertUi);
    setMyImage("insertUi");
  };
  const toggleImageMotion = () => {
    setInsertMotion(!insertMotion);
    setMyImage("insertMotion");
  };
  const toggleImageVideo = () => {
    setInsertVideo(!insertVideo);
    setMyImage("insertVideo");
  };
  const toggleImageAnimation = () => {
    setInsertAnimation(!insertAnimation);
    setMyImage("insertAnimation");
  };
  const toggleImageeBay = () => {
    setInserteBay(!inserteBay);
    setMyImage("inserteBay");
  };
  return (
    <div>
      <Navbar />
      <Container>
        <InnerContainer>
          <TopBody />
        </InnerContainer>
        <InnerContainer>
          <ShowImg />
        </InnerContainer>
      </Container>
      <Container>
        <InnerContainer>
          <Cycle />
          <HrCouncel />
        </InnerContainer>
        <InnerContainer>
          <Firebrush />
        </InnerContainer>
        <InnerContainer>
          <Performance />
          <Requirement />
        </InnerContainer>
      </Container>
      <Container>
        <InnerContainer>
          <Design
            toggleImage={toggleImage}
            toggleImageUi={toggleImageUi}
            toggleImageMotion={toggleImageMotion}
            toggleImageVideo={toggleImageVideo}
            toggleImageAnimation={toggleImageAnimation}
            toggleImageeBay={toggleImageeBay}
          />
        </InnerContainer>
        <InnerContainer>
          <DesignDetail
            insert={insert}
            insertUi={insertUi}
            insertMotion={insertMotion}
            insertVideo={insertVideo}
            insertAnimation={insertAnimation}
            inserteBay={inserteBay}
            myImage={myImage}
          />
        </InnerContainer>
      </Container>
      <Container>
        <InnerContainer>
          <Model />
        </InnerContainer>
        <InnerContainer>
          <ModleSideImage />
        </InnerContainer>
      </Container>
      <Container>
        <InnerContainer>
          <Imag />
        </InnerContainer>
        <InnerContainer>
          <Form />
        </InnerContainer>
      </Container>
      <Container>
        <InnerContainer>
          <Footer />
        </InnerContainer>
        <InnerContainer>
          <Footer />
        </InnerContainer>
      </Container>
    </div>
  );
}
