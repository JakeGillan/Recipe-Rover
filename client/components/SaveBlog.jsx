import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SaveBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit() {
    const defaults = {
      name: 'N/A',
      url: 'N/A',
    }
    const recipeInfo = {};
    Object.keys(this.state).forEach(prop => {
      if (this.state[prop] === '') recipeInfo[prop] = defaults[prop];
      else recipeInfo[prop] = this.state[prop];
    });

    fetch('../api/blogs', { // this is where we can change our router for blogs 
      method: 'POST',
      body: JSON.stringify(recipeInfo),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        console.log('sending data')
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
            <label htmlFor="url">URL:</label>
            <textarea name="url" placeholder="YourGrannyCookBook.com" value={this.state.url} onChange={this.handleInput} cols="50"></textarea>
        </div>
          <button
            type="button"
            class="secondBtn"
            onClick={this.handleSubmit}
          > Save Recipe
          </button>
        </article>
      </section>
    );
  }
}

export default SaveBlog;