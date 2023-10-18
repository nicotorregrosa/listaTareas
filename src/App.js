import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./component/Heading";
import Subheading from "./component/Subheading";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Heading classroom="66i" enable={true}></Heading>
        <Subheading></Subheading>
      </Container>
    </div>
  );
}

export default App;
