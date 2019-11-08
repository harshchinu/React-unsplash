import React from 'react';
import axios from 'axios';
import ImageList from './imageList';

import Navigation from './Navigation';
import './App.css'



class App extends React.Component  {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID b205b07b2bc8eab3c685fb4beb577a2f9d7d81aee9f50635305d040123a6b708'
            }
        })

        this.setState({ images: response.data.results })
        console.log(response.data.results)
    }

    render() {
        return (
           
            <div>
                
                <Navigation userSubmit={this.onSearchSubmit}/>
             
                
                <img className="background img-responsive" src="https://source.unsplash.com/random" alt="images" />
                <h2>This is Task 1.
                Every Time You Reload this page it gonna display new Background image through unsplash API the whole App is made on React Js </h2>
                <h3> User Search Bar in Navbar to search for image and scroll down to see them</h3>
                <img className="m responsive img-responsive" src="https://source.unsplash.com/random" alt="images" />
                
                <ImageList foundImages={this.state.images} />
            </div>
         
        
        )
    }

}

export default App;
