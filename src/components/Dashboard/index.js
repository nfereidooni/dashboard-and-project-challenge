import { React, useState } from "react";
import "./style.css";
import { Container, CloseButton, Row, Col, Tabs, Tab, ListGroup, ListGroupItem } from "react-bootstrap";

const PROJECT_DATA = [

  {title: "CodeByNiki: Web Page Creation",
  link: "https://preprlabs.org/projects/codebyniki-web-page-creation",
  challenge: "Frontend Developer Challenge 1: Web Page Creation"
},
  {title: "CodeByNiki: Login System",
  link: "https://preprlabs.org/projects/codebyniki-login-system",
  challenge: "Frontend Developer Challenge 2: Login System"
},
  {title: "CodeByNiki: Dashboard & Project Creation",
  link: "https://preprlabs.org/projects/codebyniki-dashboard-project",
  challenge: "Frontend Developer Challenge 3: Dashboard and Project Creation"
},
  {title: "CodeByNiki: Accessibility Integration",
  link: "https://preprlabs.org/projects/codebyniki-accessibility-intg",
  challenge: "Frontend Developer Challenge 4: Accessibility Integration"
}
]

function Dashboard() {

  const [hide, setHide] = useState(true);

  return (
    <Container>

      {/* Getting Started */}
      
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
        
        {/* Dashboard */}

        <div className="dashboard">
            <h1 className="gettingStarted-h1 text-center mt-5 mb-3">Dashboard</h1>
          <Row>

            {/* Projects */}
            <Col sm={12} md={4}>
              <div className="dashboardCard">
                  <h1 className="cardTitle text-center">Projects</h1>
                  <Tabs defaultActiveKey="projects"  className="tabsGroup mb-3">
                    <Tab className="cardTab" eventKey="projects" title="Projects">
                      <ListGroup className="listGroup list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="assess" title="Need to Assess">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">No Assessments Required</p>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="invited" title="Invited">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">No Invitations</p>
                      </ListGroup>
                    </Tab>
                  </Tabs>
              </div>
            </Col>

            {/* Challenges */}
            <Col sm={12} md={4}>
              <div className="dashboardCard">
                  <h1 className="cardTitle text-center">Challenges</h1>
                  <Tabs defaultActiveKey="challenges"  className="tabsGroup mb-3">
                    <Tab className="cardTab" eventKey="challenges" title="Challenges">
                      <ListGroup className="listGroup list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="invited" title="Invited">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">No Invitations</p>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="following" title="Following">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">You are not following any challenges</p>
                      </ListGroup>
                    </Tab>
                  </Tabs>
              </div>
            </Col>

            {/* Labs */}
            <Col sm={12} md={4}>
              <div className="dashboardCard">
                  <h1 className="cardTitle text-center">Labs</h1>
                  <Tabs defaultActiveKey="labs"  className="tabsGroup mb-3">
                    <Tab className="cardTab" eventKey="labs" title="Labs">
                      <ListGroup className="listGroup list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="invited" title="Invited">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">No Invitations</p>
                      </ListGroup>
                    </Tab>
                  </Tabs>
              </div>
            </Col>
          </Row>
        </div>




    </Container>
  );
}

export default Dashboard;