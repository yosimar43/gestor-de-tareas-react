import logo from "../assets/images/views/male_avatar.svg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";

const AccountPage = () => {
 const { user } = useAuth();
 return (
  <Container>
   <Row className="text-center mt-4">
    <Col xs={12}>
     <img
      src={logo}
      alt="profile"
      style={{
       width: "200px",
       height: "200px",
       borderRadius: "50%",
       objectFit: "cover",
      }}
     />
    </Col>
    <Col>
     <Card className="text-center">
      <p>
       <b>Name: {user.name}</b>
      </p>
      <p>
       <b>email: {user.email}</b>
      </p>
      <p>
       <b>Rol: {user.role}</b>
      </p>
      <Button variant="warning">Edit acount</Button>
      <Button variant="link" className="mt-1">
       Change pasword
      </Button>
      <Button variant="link" className="mt-1 text-danger">
       Delete profile
      </Button>
     </Card>
    </Col>
   </Row>
  </Container>
 );
};

export default AccountPage;
