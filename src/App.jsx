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

export default function App() {
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
    </div>
  );
}
