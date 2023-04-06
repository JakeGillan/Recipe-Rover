import React from 'react';

const RecipeDiv = (props) => {

return (
  <article className="">
    <div class="recipe">
      <h3 className="name1">{props.name}</h3>
      <button class = "secondBtn">Show Recipe</button>
    </div>
    {/* <div>
     <ul className="recipeDetailsList">
        <li className="recipeDetail">COURSE: {props.course}</li>
        <li className="recipeDetail">URL: {props.url} </li>
        <li className="recipeDetail">Ingredients:</li>
        <div className="recipeDetail">
          <p>{props.ingredients}</p>
        </div>
        <li className="recipeDetail">Instructions:</li>
        <div className="recipeDetail">
          <p>{props.instructions}</p>
        </div>
      </ul>
    </div> */}
  </article>
);
};

export default RecipeDiv;