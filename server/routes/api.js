const express = require('express');
const router = express.Router();

//  import any middleware here 
const recipeController = require('../controllers/recipeController')
const blogController = require('../controllers/blogController')

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
// app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
//   });

router.get('/fetch', async (req, res) => {
  console.log('hi')
  const url = req.query.url; // get the URL from the query string parameter
  console.log(url)
  try {
    const response = await fetch(url);
    const html = await response.text();
    res.send(html); // send the HTML response back to the client
  } catch (error) {
    res.status(500).send({ error: error.message }); // handle any errors that occur
  }
});


router.get('/getRecipes', recipeController.getRecipes,
  (req,res) => {  
    console.log('in get recipes')
    return res.status(200).json(res.locals.recipes);
  }
);

router.get('/blogRecipes', blogController.getRecipes,
  (req,res) => {  
    console.log('in get blog recipes')
    return res.status(200).json(res.locals.blogRecipes);
  }
);

router.post('/recipes', recipeController.addRecipe, 
    (req, res) => {
        console.log('inside post ')
        return res.status(200).json(res.locals.newRecipe)
    }
);

router.post('/blogs', blogController.addRecipe, 
    (req, res) => {
        console.log(res.locals.blogRecipe)
        return res.status(200).json(res.locals.blogRecipe)
    }
);




module.exports = router;