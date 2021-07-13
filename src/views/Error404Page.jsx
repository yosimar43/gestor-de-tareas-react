import ImagenEror404 from "../assets/images/views/404-not-found.svg";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routes } from "../helpers/routes";

const Error404Page = () => {
 return (
  <Container>
   <Row className="mt-5 text-center">
    <Col>
     <img style={{ width: "100%" }} src={ImagenEror404} alt="error-404-alt" />
     <h2>Are you lost?</h2>
     <p>
      Go to <Link to={routes.home}>Home page</Link>
     </p>
    </Col>
   </Row>
  </Container>
 );
};

export default Error404Page;
