import React from "react";
import './index.css';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation() {

  return (
    <div className="flex-row nav-container">
      <nav className ="nav flex-row">
          <ul className="flex-row" >
              <li>
                  <a href="#about">About Me</a>
              </li>
              <li>
                  <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                  <a href="#contact">Contact</a>
              </li>
              <li>
                  <a href="#resume">Resume</a>
              </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navigation;

// function Navigation(props) {

//   const categories = [
//     { name: "About Me"},
//     { name: "Portfolio"},
//     { name: "Contact"},
//     { name: "Resume"},
//   ];

//   function categorySelected(name) {
//     console.log(`${name} clicked`)
//   }

//   return (
//     <header>
//       <Container fluid>
//         <Row>
//           <Col></Col>
//           <Col></Col>
//         </Row>

//       </Container>
//       <nav>
//         <ul className="flex-row">
//         {categories.map((category) => (
//           <li
//             className="mx-1"
//             key={category.name}
//           >
//             <span onClick={() => categorySelected(category.name)} >
//               {category.name}
//             </span>
//           </li>
//         ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navigation;
