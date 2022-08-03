import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const industry_and_alumni_relations = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>
        Industry and Alumni Relations
      </p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
      <div className="text-center justify-content-center d-flex py-3">
        <CardComponent
          name="Bhagwan Singh"
          position="Director"
          img="/ourTeam/k19/bhagwan_singh.jpg"
          linkedin="https://www.linkedin.com/in/bhagwan-singh-rathore-0ba8561b4"
        />
      </div>
      <Container>
        <Row className="">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Deependu Jha"
                position="Chief Strategist"
                img="/ourTeam/k20/deependu_jha.jpg"
                linkedin="https://www.linkedin.com/in/bhavy-jaiswal-2b6004139"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Mahima Priya"
                position="Strategist"
                img="/ourTeam/k20/mahima_priya.png"
                linkedin="https://www.linkedin.com/in/mahima-priya-454382206"
              />
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Bhavy Jaiswal"
                position="Strategist"
                img="/ourTeam/k20/bhavy_jaiswal.jpg"
                linkedin="https://www.linkedin.com/in/bhavy-jaiswal-2b6004139"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Dhrub Narnolia"
                position="Executive"
                img="/ourTeam/k21/dhrub_narnolia.jpeg"
                linkedin="https://www.linkedin.com/in/dhruv-narnolia-2183b4224"
              />
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Aditya Kumar"
                position="Executive"
                img="/ourTeam/k21/aditya.jpg"
                linkedin="https://www.linkedin.com/in/aditya-kumar-97ba63210"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default industry_and_alumni_relations;
