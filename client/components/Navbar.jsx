import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ...
    };
  }

  render() {
    return (
      <nav>
        {/* <h1>Blog-to-Plate!</h1> */}
        <h1>Recipe Rover</h1>
        <Link to="/" className="backLink">
          <button type="button" className="btnSecondary">
            Home
          </button>
        </Link>
        <Link to="/create" className='addRecipe'>
            <button >Add Recipe</button>
        </Link>
        <Link to="/getRecipes" className='getRecipe'>
            <button >Show Recipes</button>
        </Link>
        <Link to="/findRecipes" className='findRecipe'>
            <button >Find Recipe</button>
        </Link>
         
        
      </nav>
    );
  }
}

export default NavBar;