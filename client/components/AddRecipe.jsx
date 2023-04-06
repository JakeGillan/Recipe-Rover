import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class CustomRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      url: '',
      ingredients: '',
      instructions: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit() {
    const defaults = {
      name: 'N/A',
      ingredients: 'N/A',
      course: 'N/A',
      instructions: 'N/A',
      url: 'N/A',
    }
    const recipeInfo = {};
    Object.keys(this.state).forEach(prop => {
      if (this.state[prop] === '') recipeInfo[prop] = defaults[prop];
      else recipeInfo[prop] = this.state[prop];
    });

    fetch('../api/recipes', {
      method: 'POST',
      body: JSON.stringify(recipeInfo),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        if (Object.keys(data).length <= 1) throw 'Incorrect shape of response';
        return this.props.addRecipe([data]) // ------------------------------------ look into incoming prop 
      })
      .catch(err => console.log('ERROR: ', err));
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name] : value });
  }

  render() {
    return (
      <section className="mainSection customRecipeContainer">
        <article className="card customize">
          <h2>Recipe Info</h2>
        <div className="recipeFields">
            <label htmlFor="name">Name:</label>
            <textarea name="name" placeholder="Granny's Chicken" value={this.state.name} onChange={this.handleInput} cols="50"></textarea>
        </div>
        <div className="recipeFields">
            <label htmlFor="course">Course:</label>
            <textarea name="course" placeholder="dinner" value={this.state.course} onChange={this.handleInput} cols="50"></textarea>
        </div>
        <div className="recipeFields">
            <label htmlFor="url">URL:</label>
            <textarea name="url" placeholder="YourGrannyCookBook.com" value={this.state.url} onChange={this.handleInput} cols="50"></textarea>
        </div>
         <div className="recipeFields">
             <label htmlFor="ingredients">Ingredients:</label>
            <textarea name="ingredients" placeholder="chicken" value={this.state.ingredients} onChange={this.handleInput} cols="100" rows='10'></textarea>
        </div>
           <div className="recipeFields">
            <label htmlFor="instructions">Instructions:</label>
            <textarea name="instructions" placeholder="Slap the chicken" value={this.state.instructions} onChange={this.handleInput} cols="100" rows='10' ></textarea>
          </div>

          <button
            type="button"
            class="secondBtn"
            onClick={this.handleSubmit}
          >
            Create Recipe
          </button>
        </article>
      </section>
    );
  }
}

export default CustomRecipe;
