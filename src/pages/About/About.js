import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import appStyles from "../../App.module.css";  // Adjusted path
import aboutUsImage from "../../assets/about-us.jpg";  // Correct path to the image
import styles from "../../styles/about.module.css";  // Import custom CSS

const About = () => {
  return (
    <Container className={`${appStyles.Content} ${styles.customContainer}`}>
      <Row className="my-5">
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h1 className={styles.customTitle}>About Us</h1>
            <p className={styles.customParagraph}>
              Welcome to our website! We are dedicated to providing you with the best content and resources. Our team is passionate about what we do and we strive to deliver high-quality information to our audience.
            </p>
            <p className={styles.customParagraph}>
              Our mission is to create a platform that offers valuable insights and helps our users stay informed and engaged. We believe in the power of knowledge and aim to share it with everyone.
            </p>
            <p className={styles.customParagraph}>
              Thank you for visiting our site. We hope you find our content useful and informative. If you have any questions or feedback, feel free to reach out to us.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <Image src={aboutUsImage} alt="About Us" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
