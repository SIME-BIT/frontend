import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const workshops = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>Workshops team</p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
      <div className="text-center justify-content-center d-flex py-3">
        <CardComponent
          name="Roshan Agarwal"
          position="Director"
          img="/ourTeam/k19/roshan_agarwal.jpg"
          linkedin="https://www.linkedin.com/in/roshan-agarwal-profile/"
        />
      </div>
      <Container>
        <Row className="">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Rutuja Jagdale"
                position="Chief Strategist"
                img="/ourTeam/k20/rutuja.jpg"
                linkedin="https://www.linkedin.com/in/rutuja-jagdale-803a651b7"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Md Attesar Ahmad"
                position="Strategist"
                img="/ourTeam/k20/attesar_ahmad.jpg"
                linkedin="www.linkedin.com/in/attesar-ahmad-ab0a4021b"
              />
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Radhika Gandhi"
                position="Executive"
                img="/ourTeam/k21/radhika_gandhi.jpg"
                linkedin="https://www.linkedin.com/in/radhika-gandhi-277403228"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Rakesh Raman"
                position="Executive"
                img="/ourTeam/k21/rakesh_raman.JPG"
                linkedin="https://www.linkedin.com/in/rakesh-raman-32b23a232"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default workshops;
