import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css"

const Footer = () => {
    return (
        <Footer className="footer mt-auto py-3">
            <Container>
                <Row>
                    <Col>
                        <p>Company Name</p>
                        <p>Address</p>
                        <p>Phone: 123-456-7890</p>
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
};

export default Footer;
