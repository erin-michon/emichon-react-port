import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
