import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class FindRecipe extends Component{
    constructor(props){
        super(props);

        this.state = {
            ingredientsHTML: "",
            instructionsHTML: "",
            nameHTML: "",
            url: "" // add a state to store the URL entered by the user
        };

        this.handleURLChange = this.handleURLChange.bind(this);
        this.fetchHTML = this.fetchHTML.bind(this);
    }

    handleURLChange(event){
        this.setState({url: event.target.value});
    }

    // method to fetch url data and search for recipe div
    fetchHTML() {
        const {url} = this.state; // destructure the url from the state
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
            
            })
            .catch(error => console.error(error));
    }

    render (){
        return (
            <section>
                <div>
                    <div class = "inputbox">
                        <input type="text" value={this.state.url} onChange={this.handleURLChange} placeholder="Enter URL"/>
                        <button class ="secondBtn" onClick={this.fetchHTML}>Fetch HTML</button>
                    </div>
                    <div class = "display">
                        <iframe class="name" srcDoc={this.state.nameHTML}></iframe>
                        <iframe class="ingredients" srcDoc={this.state.ingredientsHTML}></iframe>
                        <iframe class="instructins" srcDoc={this.state.instructionsHTML}></iframe>
                        {/* <div dangerouslySetInnerHTML={{__html: this.state.nameHTML}}></div> */}
                        {/* <div dangerouslySetInnerHTML={{__html: this.state.ingredientsHTML}}></div> */}
                        {/* <div dangerouslySetInnerHTML={{__html: this.state.instructionsHTML}}></div> */}
                    </div>

                </div>
                
            </section>
        )
    }
}

export default FindRecipe;
