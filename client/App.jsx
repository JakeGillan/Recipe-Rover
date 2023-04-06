import React, {Component, element } from 'react';
import { Routes, Route } from 'react-router-dom';


import AddRecipe from './components/AddRecipe.jsx';
import NavBar from './components/Navbar.jsx';
import Recipes from './components/Recipes.jsx';
import FindRecipe from './components/FindRecipe.jsx';
import Home from './components/Home.jsx';
import SaveBlog from './components/SaveBlog.jsx';
import SavedBlogRecipes from './components/SavedBlogRecipes.jsx';


// import './stylesheets/styles.css';

class App extends Component {

   render() {
    return (
        <div>
            <NavBar/> 
            <main>
                <Routes>
                    <Route path = '/' element={<Home/>}></Route>
                    <Route path = '/getBlogRecipes' element={<SavedBlogRecipes/>}></Route>
                    <Route path="/addRecipe" element={<AddRecipe/>} ></Route>
                    <Route path="/yourRecipes" element={<Recipes/>} ></Route>
                    <Route path="/find-save-blog-recipe" element={<div><FindRecipe/> <SaveBlog/></div>} ></Route>
                </Routes>
            </main>
        </div>
        );   
    };
};

export default App; 