const model = require('../models/blogModels');

const blogController = {}; 

blogController.getRecipes = (req, res, next) => {
    console.log('in middleware')
model.find({}).exec()
.then(data => {
    res.locals.blogRecipes = data;
    console.log(res.locals.blogRecipes)
    return next();
})
.catch(err => {
    return next ({
        log: `Error: ${err}`, 
        message: {err: 'Error occured in getRecipes middleware'}
    })
})
}

blogController.addRecipe = (req, res, next) => {
    const {name, url } = req.body; 
    console.log (name, url)

    model.create({ name, url
})
    .then(data => {
        res.locals.blogRecipe = data; 
        console.log('blog post completed part1')
        return next();
    })
    .catch(err => {
        return next({
            log: `Error: ${err}`, 
            message: {err: 'Error occured in addRecipe middleware'}
        })
    })
}




module.exports = blogController; 