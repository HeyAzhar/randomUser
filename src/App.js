import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./MyCard";
import Axios from "axios";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);

    const details = data.results[0];

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col className="m-auto" md={6}>
          <MyCard details={details} refresh={fetchDetails} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
