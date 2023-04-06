import React, { useState } from 'react';

const SavedBlogRecipeDiv = (props) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const handleClick = () => {
  props.fetchHTML(props.url);
    if (showRecipe){
    setShowRecipe(false);  
  } else {setShowRecipe(true)};
}

return (
  <article className="">
    <div className="recipe">
      <h3 className="name1">{props.name}</h3>
      <button className = "secondBtn" onClick= {handleClick}>Show Recipe</button>
         {showRecipe && (
          <div className="display">
            <iframe className="name" srcDoc={props.nameHTML}></iframe>
            {/* <iframe class="img1" srcDoc={props.imgHTML} width="400" height="300" ></iframe> */}
            <iframe className="ingredients" srcDoc={props.ingredientsHTML}></iframe>
            <iframe className="instructins" srcDoc={props.instructionsHTML}></iframe>
          </div>
        )}
    </div>
  </article>
);
};

export default SavedBlogRecipeDiv;