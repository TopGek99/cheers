import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
// import { Redirect } from "react-router";
import API from "../../utils/API";
// import Drink from "../Drink";

function DrinkForm({ drinks, setDrinks, flipButton }) {
  const bevRef = useRef(null);
  const locationRef = useRef(null);

  const submitDrink = (event) => {
    event.preventDefault();
    let drink = {
      beverage: bevRef.current.value,
      location: locationRef.current.value,
    };
    API.saveDrink(drink).then(() => {
      setDrinks([drink, ...drinks]);
      flipButton();
    });
  };
  return (
    <Form onSubmit={submitDrink}>
      {/* <Form.File className="my-3" custom /> */}
      <Form.Control as="select" className="my-3" ref={bevRef}>
        <option default value="Select">
          Select a Drink
        </option>
        <option value="Lager">Lager</option>
        <option value="Pale Ale">Pale Ale</option>
        <option value="IPA">IPA</option>
        <option value="Stout">Stout</option>
      </Form.Control>
      <Form.Control placeholder="Location" className="my-3" ref={locationRef} />
      <Button type="submit" className="mx-2" variant="success">
        Share
      </Button>
      <Button onClick={flipButton} variant="danger">
        {" "}
        Cancel
      </Button>
    </Form>
  );
}

export default DrinkForm;
