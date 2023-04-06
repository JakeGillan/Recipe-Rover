import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SavedBlogRecipesDiv from './SavedBlogRecipesDiv.jsx'

class SavedBlogRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsHTML: "",
      instructionsHTML: "",
      nameHTML: "",
      imgHTML: "",
      fetchedRecipes: false,
      recipes: [],
    };
  }

   componentDidMount() {
    fetch('/api/blogRecipes')
      .then(res => res.json())
      .then((recipes) => {
        console.log('recipes', recipes)
        if (!Array.isArray(recipes)) recipes = [];
        return this.setState({
          recipes,
          fetchedRecipes: true
        });
      })
      .catch(err => console.log('recipes.componentDidMount: get recipes: ERROR: ', err));
  }

   fetchHTML(url) {
        // const {url} = this.state; // destructure the url from the state
        fetch(`/api/fetch/?url=${encodeURIComponent(url)}`)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const html = parser.parseFromString(data, "text/html");

                const nameDiv = html.querySelector("h1[class*='title']"); // search for div with classname containing "ingredients"
                if(nameDiv){
                    this.setState({ nameHTML: nameDiv.outerHTML }); // if found, update the state with the html code of the recipe div
                } else {
                    this.setState({ nameHTML: "Please enter a valid webpage" });                
                }

                const ingredientsDiv = html.querySelector("div[class*='ingredients']"); // search for div with classname containing "ingredients"
                if(ingredientsDiv){
                    this.setState({ ingredientsHTML: ingredientsDiv.outerHTML }); // if found, update the state with the html code of the recipe div
                }

                const instructionsDiv = html.querySelector("div[class*='instructions']");  // repeat above 
                 if(instructionsDiv){
                    this.setState({ instructionsHTML: instructionsDiv.outerHTML }); // if found, update the state with the html code of the recipe div
                }

                 const imgDiv = html.querySelector("div[class*='image']");  // repeat above 
                 if(imgDiv){
                    this.setState({ imgHTML: imgDiv.outerHTML }); // if found, update the state with the html code of the recipe div
                }
            
            })
            .catch(error => console.error(error));
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
        <SavedBlogRecipesDiv
          id= {i}
          key={i}
          name = {recipes[i].name}
          url = {recipes[i].url} 
          fetchingDetails={this.state.fetchingDetails}
          ingredientsHTML = {this.state.ingredientsHTML}
          instructionsHTML = {this.state.instructionsHTML}
          nameHTML= {this.state.nameHTML}
          imgHTML= {this.state.imgHTML}
          fetchHTML = {this.fetchHTML.bind(this)}
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



export default SavedBlogRecipes;