import React, { useState } from 'react';

const RecipeDiv = (props) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const handleClick = () => {
  props.fetchHTML(props.url);
  if (showRecipe){
    setShowRecipe(false);  
  } else {setShowRecipe(true)};
}

return (
  <article className="">
    <div class="recipe">
      <h3 className="name1">{props.name}</h3>
      <button class = "secondBtn" onClick= {handleClick}>Show Recipe</button>
         {showRecipe && (
          <div class="display">
            <div>
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
                </div>
          </div>
        )}
    </div>
  </article>
);
};

export default RecipeDiv;


 