import TopBody from "./Components/TopBody.jsx";
import Navbar from "./Components/Navbar.jsx";
import Container from "./Components/Container.jsx";
import InnerContainer from "./Components/InnerContainer.jsx";
import ShowImg from "./Components/ShowImg.jsx";

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
    </div>
  );
}
