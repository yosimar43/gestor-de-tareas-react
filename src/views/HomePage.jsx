import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routes } from "../helpers/routes";
import logo from "../assets/images/views/tasks-card.svg";

const HomePage = () => {
 return (
  <Container>
   <Row className="mt-5"></Row>
   <Col className="mb-5">
    <h2>Welcome to your task manager</h2>
    <p>!Here you can manage your projects</p>
    <p>
     Mark your homework as finished, add a new homework, delete or update your
     data.
    </p>
    <div>
     <Link to={routes.login}>Start now ?</Link> or{" "}
     <Button as={Link} to={routes.register} className="mb-1">
      Are you new ?
     </Button>
    </div>
   </Col>
   <Col>
    <img className="img-fluid" src={logo} alt="Task-manager" />
   </Col>
  </Container>
 );
};

export default HomePage;
