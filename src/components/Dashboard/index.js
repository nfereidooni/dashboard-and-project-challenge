import { React, useState } from "react";
import "./style.css";
import { Container, CloseButton, Row, Col } from "react-bootstrap";

const CODE_DATA = [

  {title: "Backend Developer Challenge 1: SQL",
  image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/hn6fd9vCImNkx6Eygm4cNkUnO.png",
  imageAlt: "Backend Developer Challenge icon Banner",
  link: "https://preprlabs.org/challengeManager/backend-developer-challenge-1-sql",
  recommended: "yes",
  type: "Challenge",
  description: "Introduction: SQL is a query language that is used to interact with databases. It is a Domain Specific Language, meaning it is a specialized language that is used for working with data in databases."
},
  {title: "Backend Developer Challenge 2: HTML, CSS and PHP",
  image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/Xmjj54N0oStU9seXcLArlNgpq.png",
  imageAlt: "Backend Developer Challenge icon Banner",
  link: "https://preprlabs.org/challengeManager/backend-developer-challenge-2-html-css-and-php",
  recommended: "yes",
  type: "Challenge",
  description: "Introduction: HTML is the basis for all web pages on the internet and CSS dictates how HTML elements will be displayed. In this challenge you will be given a template for a basic web page you will also use PHP to create a search functionality for the website."
  }
]

function Dashboard() {

  const [hide, setHide] = useState(true);

  return (
    <Container>
        {hide && <div className="gettingStarted" id="gettingStarted">
            <CloseButton onClick={() => setHide(false)} aria-label="Hide" />
            <h1 className="gettingStarted-h1 text-center">Getting Started</h1>
            <h2 className="gettingStarted-h2 text-center">Feel Free To Explore Or Use These Suggestions To Get Started!</h2>
            <Row>
              <Col className="gettingStartedCol" sm={12} md={4}>
                <div className="gettingStartedDiv text-center">
                  <i class="gettingStartedIcon fas fa-flask fa-2x"></i>
                  <h3 className="gettingStarted-h3">Join your first lab</h3>
                  <p className="gettingStarted-p">Find a community that shares your interests. Collaborate together to learn and solve challenges.</p>
                </div>
              </Col>
              <Col className="gettingStartedCol" sm={12} md={4}>   
                <div className="gettingStartedDiv text-center">
                  <i class="gettingStartedIcon fas fa-puzzle-piece fa-2x"></i>
                  <h3 className="gettingStarted-h3">Join Your First Challenge</h3>
                  <p className="gettingStarted-p">Build skills and Demonstrate your problem solving abilities by completing challenges.</p>
                </div>
              </Col>
              <Col className="gettingStartedCol" sm={12} md={4}>
                <div className="gettingStartedDiv text-center">
                  <i class="gettingStartedIcon fas fa-user-circle fa-2x"></i>
                  <h3 className="gettingStarted-h3">Set Up Your Profile</h3>
                  <p className="gettingStarted-p">Add a profile photo and fill out details so people can get to know you and invite you to challenges.</p>
                </div>
              </Col>
            </Row>
            <p className="gettingStarted-p text-center">Questions? check out our <a href="https://intercom.help/preprme/en" target="_blank" rel="noreferrer">Help Center</a> or send us a message in the chat box found on the bottom right of your screen.</p>
        </div>}
    </Container>
  );
}

export default Dashboard;