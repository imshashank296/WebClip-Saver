import "./App.css";
import styled from "styled-components";
import { NavBar } from "./Components/Navbar";
import { HeaderBody } from "./Components/HeaderBody";
import { Features } from "./Components/Features";
import { Footer } from "./Footer";

function App() {
  return (
    <Container>
      <NavBar></NavBar>
      <HeaderBody></HeaderBody>
      <Features />
      <Footer />
    </Container>
  );
}
export default App;

const Container = styled.div``;
