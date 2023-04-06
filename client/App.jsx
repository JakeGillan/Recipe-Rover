import React, {Component, element } from 'react';
import { Routes, Route } from 'react-router-dom';


import AddRecipe from './components/AddRecipe.jsx';
import NavBar from './components/Navbar.jsx';
import Recipes from './components/Recipes.jsx';
import FindRecipe from './components/FindRecipe.jsx';


// import './stylesheets/styles.css';

class App extends Component {

   render() {
    return (
        <div>
            <NavBar/> 
            <main>
                <Routes>
                    <Route path = '/'></Route>
                    <Route path="/create" element={<AddRecipe/>} ></Route>
                    <Route path="/getRecipes" element={<Recipes/>} ></Route>
                    <Route path="/findRecipes" element={<div><FindRecipe/> <AddRecipe/></div>} ></Route>
                </Routes>
            </main>
        </div>
        );   
    };
};

export default App; 