import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import UserImg from "../assets/user.jpg";
import DrinkForm from "../DrinkForm";
import Drink from "../Drink";
import API from "../../utils/API";

function User() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [user, setUser] = useState(null);

  const flipButton = () => {
    if (buttonClicked) {
      setButtonClicked(false);
    } else {
      setButtonClicked(true);
    }
  };
  const renderDrinkForm = () => {
    if (buttonClicked) {
      return (
        <DrinkForm
          drinks={drinks}
          setDrinks={setDrinks}
          flipButton={flipButton}
        />
      );
    }
  };
  const renderDrinks = () => {
    return drinks.map((drink) => <Drink drink={drink} />);
  };

  useEffect(() => {
    API.getAuth().then((session) => {
      API.getUserById(session.data.userId).then((user) => {
        setUser(user.data);
        setDrinks(user.data.drinks);
      });
    });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col className="col-2 m-5 text-center">
          <Image src={UserImg} className="img-thumbnail" roundedCircle />
          <h2>{user ? user.username : "user"}</h2>
        </Col>
        <Col className="col-6 m-5">
          <Button onClick={flipButton} variant="secondary">
            + New Drink
          </Button>
          {renderDrinkForm()}
          {drinks ? renderDrinks() : ""}
        </Col>
      </Row>
    </Container>
  );
}

export default User;
