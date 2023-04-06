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
        <Link to="/find-save-blog-recipe" className='findRecipe'>
            <button >Blog-to-Plate</button>
        </Link>
        <Link to="/getBlogRecipes" className='getRecipe'>
            <button >Saved Blog Recipes</button>
        </Link>
        <Link to="/yourRecipes" className='findRecipe'>
            <button >Your Recipes</button>
        </Link>
        <Link to="/addRecipe" className='addRecipe'>
            <button >Add Recipe</button>
        </Link>
        
      </nav>
    );
  }
}

export default NavBar;