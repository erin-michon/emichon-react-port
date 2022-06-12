
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import '.App.css';

function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;


// function App() {

//   const categories = [
//     { name: "About Me"},
//     { name: "Portfolio"},
//     { name: "Contact"},
//     { name: "Resume"},
//   ];
//   const [currentCategory, setCurrentCategory] = useState(categories[0]);
//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <Navigation
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Navigation>
//       <main>
//         {!contactSelected ? (
//           <>
//             <About></About>
//           </>
//         ) : (
//           <ContactForm></ContactForm>
//         )}
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }
