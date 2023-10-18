import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./component/Heading";
import SubHeading from "./component/SubHeading";
import { Container } from "react-bootstrap";
import { useState } from "react";
import FormTask from "./component/FormTask";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Container>
        <Heading classroom="66i" enable={enabled}></Heading>
        <SubHeading></SubHeading>
        <div className="text-center">
          <button
            className="btn btn-primary text-center"
            onClick={() => setEnabled(!enabled)}
          >
            {enabled ? "Deshabilitar" : "Habilitar"}
          </button>
          <FormTask></FormTask>
        </div>
      </Container>
    </div>
  );
}

export default App;
