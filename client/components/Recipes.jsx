import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RecipeDiv from './RecipeDiv.jsx';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedRecipes: false,
      recipes: [],
    };
  }

   componentDidMount() {
    fetch('/api/getRecipes')
      .then(res => res.json())
      .then((recipes) => {
        console.log(recipes)
        if (!Array.isArray(recipes)) recipes = [];
        return this.setState({
          recipes,
          fetchedRecipes: true
        });
      })
      .catch(err => console.log('recipes.componentD_idMount: get recipes: ERROR: ', err));
  
  }
  render() {
   if (!this.state.fetchedRecipes) return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

    const { recipes } = this.state;

    if (!recipes) return null;

    if (!recipes.length) return (
      <div>Sorry, no recipes found</div>
    );
    
    const Cards = [];
    for (let i = 0; i < recipes.length; i++){
      Cards.push(
        <RecipeDiv
          id= {i}
          key={i}
          name = {recipes[i].name}
          course = {recipes[i].course}
          url = {recipes[i].url} 
          ingredients = {recipes[i].ingredients}
          instructions = {recipes[i].instructions}
          fetchingDetails={this.state.fetchingDetails}
        />
      );
    };

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <h2>Recipes</h2>
        </header>
        <div class="Container">
          {Cards}
        </div>
      </section>
    );
  }
}



export default Recipes;