import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruck, FaPaperPlane, FaBrain } from "react-icons/fa";

const Service = () => {
  return (
    <div id="Service">
      <h2 className="service-title">SERVICES</h2>
      <Container>
        <Row className="service-row">
          <Col
            md
            className="service-col"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <FaPaperPlane className="service-icons-size"></FaPaperPlane>
            <h2>Organize</h2>
            <p className="service-dsc">
              We are committed to bringing our clients exceptional floral
              arrangements, award-winning designs, and unsurpassed service.Our
              experienced staff of designers will create floral designs that can
              complement any occasion.
            </p>
          </Col>
          <Col
            md
            className="service-col"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <FaTruck className="service-icons-size"></FaTruck>
            <h2>Deliver</h2>
            <p className="service-dsc">
              In fact, our experienced delivery team is one of the best in the
              area, we provide flexible, adaptable and fast solutions to all of
              our clients. All you need to do is to tell us what, when and where
              - we will take care of everything else.
            </p>
          </Col>
        </Row>
        <Row className="service-row">
          <Col
            md
            className="service-col"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1>Our Philosophy</h1>
            <FaBrain className="service-icons-size"></FaBrain>
            <p className="service-dsc">
              We believe that although tradition is valuable, our mission is to
              think of unique designs to create an event that reflects your
              special relationship and individual personalities. We are very
              proud of our reputation and history of close work with other local
              wedding service providers. We are truly invested in working with
              others to ensure that every detail of your day is as beautiful as
              you pictured it.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
