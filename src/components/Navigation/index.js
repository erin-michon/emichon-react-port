import React, { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container';

function Navigation() {

  const categories = [
    { name: "About Me"},
    { name: "Portfolio"},
    { name: "Contact"},
    { name: "Resume"},
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>

      </Container>
      <h2>Erin Michon</h2>
      <nav>
        <ul className="flex-row">
        {categories.map((category) => (
          <li
            className="mx-1"
            key={category.name}
          >
            <span onClick={() => categorySelected(category.name)} >
              {category.name}
            </span>
          </li>
        ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;