import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Showcase = () => {
  return (
    <div id="Showcase">
      <h1 className="about-title">- Our best roses -</h1>
      <div>
        <Container>
          <Row className="about-row" data-aos="fade-right" data-aos-delay="500">
            <Col md>
              <Image
                className="about-img"
                src={require("./../img/11.png")}
              ></Image>
            </Col>
            <Col md>
              <h3>Rosa Falstaff</h3>
              <p className="about-dsc">
                'Falstaff' is a David Austin English shrub rose featuring large
                4- to 5-inch dark crimson-red flowers that bloom continually. It
                is regarded as one of David Austin's best offerings. It has the
                typical strong fragrance of an English shrub rose, and a good
                rebloom cycle.
              </p>
            </Col>
          </Row>
          <Row className="about-row" data-aos="fade-left" data-aos-delay="500">
            <Col md>
              <h3>Rosa Bonica</h3>
              <p className="about-dsc">
                'Bonica' is a shrub rose that bears light-pink flowers on a
                plant with the typical bushy growth habit. It flowers repeatedly
                from spring to fall, with fragrant blooms that are 2 to 3 inches
                across. This is very dependable plant in cooler climates.
              </p>
            </Col>
            <Col md>
              <Image
                className="about-img-2"
                src={require("./../img/22.png")}
              ></Image>
            </Col>
          </Row>
          <Row className="about-row" data-aos="fade-right" data-aos-delay="500">
            <Col md>
              <Image
                className="about-img-3"
                src={require("./../img/33.png")}
              ></Image>
            </Col>
            <Col md>
              <h3>Rosa Governor Rosellini</h3>
              <p className="about-dsc">
                'Governor Rosellini' is a David Austin shrub rose, advertised as
                pink but which may end up looking more apricot in color. It is a
                repeat bloomer with small clusters of large, cupped flowers, 4
                to 5 inches across. It has good resistance to disease and a
                strong fragrance.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Showcase;
