import LagerImg from "../assets/lager.jpg";
import PaleImg from "../assets/pale-ale.jpg";
import IPAImg from "../assets/ipa.jpg";
import StoutImg from "../assets/stout.jpg";
import { Card } from "react-bootstrap";

function Drink({ drink }) {
  let BeerImg;
  switch (drink.beverage) {
    case "Lager":
      BeerImg = LagerImg;
      break;
    case "Pale Ale":
      BeerImg = PaleImg;
      break;
    case "IPA":
      BeerImg = IPAImg;
      break;
    case "Stout":
      BeerImg = StoutImg;
      break;
    default:
      break;
  }
  return (
    <Card className="my-3">
      <Card.Img variant="top" src={BeerImg} />
      <Card.Body>
        <Card.Title>{drink.beverage}</Card.Title>
        <Card.Text>{drink.location}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Drink;
