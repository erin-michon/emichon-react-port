import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import codeQuiz from "../../assets/images/1.gif"
import mario from "../../assets/images/2.gif"
import pass from "../../assets/images/3.gif"
import note from "../../assets/images/4.gif"
import jar from "../../assets/images/5.gif"
import social from "../../assets/images/6.gif"
import blog from "../../assets/images/7.gif"

function ProjectList() {

  return (
    <section className="section">

      <Row className="project-row">
        <Col className="project-card">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={codeQuiz} />
            <Card.Body>
              <Card.Title>Code Quiz</Card.Title>
              <Card.Link href="https://erin-michon.github.io/code-quiz/">Deployed Application</Card.Link>
              <Card.Link href="https://github.com/erin-michon/code-quiz">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>

        </Col>

        <Col className="project-card">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={mario} />
            <Card.Body>
              <Card.Title>It's Amiibo Mario!</Card.Title>
              <Card.Link href="https://alex-soucy.github.io/its-amiibo-mario/">Deployed Application</Card.Link>
              <Card.Link href="https://github.com/erin-michon/its-amiibo-mario">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>

        </Col>
      </Row>

      <Row className="project-row">
        <Col
        className="project-card">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pass} />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Link href="https://erin-michon.github.io/password-generator/">Deployed Application</Card.Link>
              <Card.Link href="https://github.com/erin-michon/password-generator">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>

        </Col>

        <Col className="project-card">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={note} />
            <Card.Body>
              <Card.Title>Note Taker Application</Card.Title>
              <Card.Link href="https://murmuring-sands-28795.herokuapp.com/">Deployed Application</Card.Link>
              <Card.Link href="https://github.com/erin-michon/read-icculus">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>

        </Col>
      </Row>

      <Row className="project-row">
        <Col className="project-card">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={jar} />
            <Card.Body>
              <Card.Title>Jar-O-Kids</Card.Title>
              <Card.Link href="https://serene-stream-62860.herokuapp.com/">Deployed Application</Card.Link>
              <Card.Link href="https://github.com/erin-michon/Jar-O-Kids">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>

        </Col>

        <Col className="project-card">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={social} />
            <Card.Body>
              <Card.Title>NoSQL: Social Network API</Card.Title>
              <Card.Link href="https://watch.screencastify.com/v/PKDVjeiDahlEs1XFrSbC">Walk-Through Video</Card.Link>
              <Card.Link href="https://github.com/erin-michon/rail-chomper">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>

        </Col>       
      </Row>

      {/* <Row className="project-row">
        <Col className="project-card">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={blog} />
            <Card.Body>
              <Card.Title>No Bliggity - No Blog</Card.Title>
              <Card.Link href="https://desolate-peak-71627.herokuapp.com/">Deployed Application</Card.Link>
              <Card.Link href="https://github.com/erin-michon/no-bliggity-no-blog">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>

        </Col>
      <Row/>  */}

    </section>
  )
};

export default ProjectList;
