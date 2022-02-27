import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';


function App() {
  return (
    <div>
      {/* <Navigation></Navigation> */}
      <main>
        <ContactForm></ContactForm>
        <Project></Project>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
