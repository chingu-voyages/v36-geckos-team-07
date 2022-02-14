import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import Daryl from '../../images/daryl.jpg';
import Mateo from '../../images/mateo.jpg';
import Gift from '../../images/gift.jpg';

function About() {
  return (
    <div className="about container">
      <div className="page-head-container">
        <div>
          <h1>About</h1>
          <p>Read on to learn about Token Train and the development team!</p>
        </div>
      </div>

      <hr
        style={{
          color: "#000000",
          height: 2,
          borderColor: "#000000",
        }}
      />

      <div className="about-card">
        <h2>Description</h2>
        <p>
          Token Train is your station for all things crypto and NFT! This
          application brings together cryptocurrency news, resources to learn
          about cryptocurrencies and non-fungible tokens (NFTs), and top NFT
          sales information. This application utilizes APIs and other sources
          for information. Token Train was built as part of{" "}
          <a
            href="https://www.chingu.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chingu
          </a>{" "}
          Voyage 36 to give the developers a chance to apply their technical
          skills and soft skills.
        </p>

        <p>
          This site is not regularly maintained and depends on external APIs for
          news. Users should verify information, seek out current resources and
          receive appropriate financial advice before making financial
          decisions.
        </p>

        <h2>We are Chingu Gecko Team 07 (Voyage 36)</h2>
        <CardGroup>
          <Card>
            <div className="circle">
              <div className="shape">
                <Card.Img variant="top" src={Mateo} width="280" height="280" />
              </div>
            </div>

            <Card.Body>
              <Card.Title>Mateo Cruz</Card.Title>
              <Card.Text>Front End Web Developer</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <div className="circle">
              <div className="shape">
                <Card.Img variant="top" src={Gift} width="280" height="280" />
              </div>
            </div>
            <Card.Body>
              <Card.Title>Nwakaego Gift Eze</Card.Title>
              <Card.Text>
                User-Focused Web Developer with extensive skills in JavaScript,
                HTML/CSS and React.js
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <div className="circle">
              <div className="shape">
                <Card.Img variant="top" src={Daryl} width="280" height="280" />
              </div>
            </div>
            <Card.Body>
              <Card.Title>Daryl Nauman</Card.Title>
              <Card.Text>
                Full Stack Developer | Technology Enthusiast | Executive MBA
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default About;
