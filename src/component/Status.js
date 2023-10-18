import React from "react";
import { Alert } from "react-bootstrap";

const Status = ({ comition, available }) => {
  return (
    <div>
      {available ? (
        <Alert variant={"info"}>La comisión {comition} está habilitada</Alert>
      ) : null}
    </div>
  );
};

export default Status;
