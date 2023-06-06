import React, { useState } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
// import "./data.json";

const RandomDataComponent = () => {
  const [randomData, setRandomData] = useState(null);

  const fetchRandomData = async () => {
    try {
      const response = await axios.get("/data.json");
      const data = response.data;

      // Get a random object from the data array
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomObject = data[randomIndex];

      setRandomData(randomObject);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="btn btn-success fs-bold" onClick={fetchRandomData}>
        Foodi Suggestion
      </button>
      <br />
      <br />
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}

      {randomData && (
        <div>
          <h3>
            today you can cook in your <p> {randomData.type}</p>{" "}
          </h3>

          <h1> {randomData.name}</h1>
        </div>
      )}
    </div>
  );
};

export default RandomDataComponent;
