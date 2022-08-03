import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const core = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>Core team</p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />

      <div className="text-center justify-content-center d-flex">
        <CardComponent
          name="Dr. L.N. Pattanaik"
          position="Faculty advisor"
          img="/ourTeam/prof/Pattnaik_sir.jpg"
          linkedin="https://www.linkedin.com/in/dr-l-n-pattanaik-15756975/"
        />
      </div>


      <Container>

        <Row className="py-5">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex">
              <CardComponent
                name="Vishal H. Shah"
                position="Executive member"
                img="/ourTeam/prof/vishal_shah.jpg"
                linkedin="https://www.linkedin.com/in/vishal-h-shah-971bb29/"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex">
              <CardComponent
                name="Dr. Priyank Kumar"
                position="Executive member"
                img="/ourTeam/prof/priyank_kumar.jpg"
                linkedin="https://www.linkedin.com/in/priyank-kumar-ph-d-ba042821/"
              />
            </div>
          </Col>
        </Row >

        <Row className="py-3">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex">
              <CardComponent
                name="Aditya Raj Choudhary"
                position="President"
                img="/ourTeam/k19/aditya_raj_choudhary.jpeg"
                linkedin="https://www.linkedin.com/in/aditya-raj-choudhary-066532190/"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex">
              <CardComponent
                name="Srijan Jha"
                position="Joint President"
                img="/ourTeam/k19/srijan_jha.jpg"
                linkedin="https://www.linkedin.com/in/srijan-jha-82373219a/"
              />
            </div>
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex">
              <CardComponent
                name="Roshan Agarwal"
                position="Vice President"
                img="/ourTeam/k19/roshan_agarwal.jpg"
                linkedin="https://www.linkedin.com/in/roshan-agarwal-profile/"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex">
              <CardComponent
                name="Aniket Shandilya"
                position="General Secretary"
                img="/ourTeam/k20/aniket_shandilya.jpeg"
                linkedin="https://www.linkedin.com/in/aniket-shandilya-b11665193/"
              />
            </div>
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex">
              <CardComponent
                name="Dhiren Kumar"
                position="Joint Secretary"
                img="/ourTeam/k20/dhiren_kumar.jpeg"
                linkedin="https://www.linkedin.com/in/dhiren-k-2002/"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center justify-content-center d-flex">
              <CardComponent
                name="Deependu Jha"
                position="Treasurer"
                img="/ourTeam/k20/deependu_jha.jpg"
                linkedin="https://www.linkedin.com/in/deependu-jha-49b18b179/"
              />
            </div>
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={6}>
            <div className="text-center justify-content-center d-flex">
              <CardComponent
                name="T. Pranav Rushi"
                position="Joint Treasurer"
                img="/ourTeam/k20/pranav_rushi.jpg"
                linkedin="https://www.linkedin.com/in/t-pranav-rushi-575558203/"
              />
            </div>
          </Col>

        </Row>

      </Container>



    </div>

  );
};

export default core;
