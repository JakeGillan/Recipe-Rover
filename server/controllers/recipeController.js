const model = require('../models/recipeModels');

const recipeController = {}; 

recipeController.getRecipes = (req, res, next) => {
    console.log('in middleware')
model.find({}).exec()
.then(data => {
    res.locals.recipes = data;
    return next();
})
.catch(err => {
    return next ({
        log: `Error: ${err}`, 
        message: {err: 'Error occured in getRecipes middleware'}
    })
})
}

recipeController.addRecipe = (req, res, next) => {
    const {name, course, url, ingredients, instructions} = req.body; 

    model.create({
        name, course, url, ingredients, instructions
    })
    .then(data => {
        res.locals.newRecipe = data; 
        return next();
    })
    .catch(err => {
        return next({
            log: `Error: ${err}`, 
            message: {err: 'Error occured in addRecipe middleware'}
        })
    })
}




module.exports = recipeController; 