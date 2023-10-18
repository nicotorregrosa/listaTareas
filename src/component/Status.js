import React from "react";
import { Alert } from "react-bootstrap";

const Status = ({ comition, available }) => {
  return (
    <div>
      <Alert variant={"info"}>La comisión {comition} está habilitada</Alert>
    </div>
  );
};

export default Status;
