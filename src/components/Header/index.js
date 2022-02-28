import React from "react";
import Navigation from '../Navigation';

function Header() {
    return (

      <header className="d-flex flex-row header">
        <h2>
            Erin Michon
        </h2>
        <Navigation></Navigation>
      </header>
    );
}

export default Header;