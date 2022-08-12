import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Research_proceeding = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>
        Research proceeding team
      </p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
      <Container>
        <Row className="">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Shashank Kumar Singh"
                position="Director"
                img="/ourTeam/k19/shashank_kumar_singh.jpg"
                linkedin="https://www.linkedin.com/in/shashank-kumar-singh-571343204/"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Krishna Kumar Singh Garia"
                position="Director"
                img="/ourTeam/k19/krishna_garia.jpg"
                linkedin="https://www.linkedin.com/in/krishna-kumar-singh-garia-9070221a2/"
              />
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Ritika"
                position="Chief Strategist"
                img="/ourTeam/k20/ritika.jpeg"
                linkedin="https://www.linkedin.com/in/itsritika11"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Manav Mathur"
                position="Strategist"
                img="/ourTeam/k20/manav_mathur.jpg"
                linkedin="https://www.linkedin.com/mwlite/in/manav-mathur-26264122b"
              />
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="HARI SURABH DWIVEDI"
                position="Strategist"
                img="/ourTeam/k20/hari_saurabh.jpg"
                linkedin="https://www.linkedin.com/in/harisaurabhdwivedi"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Abhishek kumar"
                position="Executive"
                img="/ourTeam/k21/abhishek.jpg"
                linkedin="https://www.linkedin.com/in/abhi-kumar-146920239"
              />
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex py-3">
              <CardComponent
                name="Perumalla Satvik"
                position="Executive"
                img="/ourTeam/k21/perumalla_satvik.jpg"
                linkedin="https://www.linkedin.com/in/perumalla-satvik-419047229"
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

export default Research_proceeding;
