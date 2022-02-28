import React from 'react';
import passGenApp from "../../assets/images/passGenApp.gif"


const ProjectList = {

  const [projects] = useState([
    {
      
    }
  ])
  const currentProject = {
    title: "Password Generator",
    deployed: "https://erin-michon.github.io/password-generator/",
    github: "https://github.com/erin-michon/password-generator"
  }
  return (
    <section>
      <div className="flex-row">
        <img src={passGenApp} alt="a gif of the password generator accepting criteria from user and providing a generated password"></img>
      </div>
      <h1>{currentProject.title}</h1>
      <a href={currentProject.deployed}>Deployed Application</a>
      <a href={currentProject.github}>GitHub Repository</a>
    </section>
  );
}

export default ProjectList;


// import React from 'react';

// export default function Card(props) {
//   const cardStyle = {
//     width: '18rem',
//   };

//   return (
//     <div className="container">
//       <div className="card" style={cardStyle}>
//         <img
//           className="card-img-top"
//           src={`http://placecorgi.com/`}
//           alt="Card cap"
//         />
//         <div className="card-body">
//         <h5 className="card-title">Name: {props.name}</h5>
//           <p className="card-text">Description: {props.description}</p>
//           <p className="card-text">ID: {props.id}</p>
//           <a href="#" className="btn btn-primary">
//             Adopt {props.name}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
