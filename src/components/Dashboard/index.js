import { React } from "react";
import "./style.css";
import { Container } from "react-bootstrap";

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

  return (
    <Container>
        <div className="gettingStarted">
            <p>Feel Free To Explore Or Use These Suggestions To Get Started!</p>
            <div>Join Your First Lab</div>    
            <div>Join Your First Challenge</div>   
            <div>JSet Up Your Profile</div>   
            <p>Questions? check out our Help Center or send us a message in the chat box found on the bottom right of your screen.</p>
        </div>
    </Container>
  );
}

export default Dashboard;