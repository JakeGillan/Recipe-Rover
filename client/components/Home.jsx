import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="image-container">
        {/* <img src="/Users/jgillan/Codesmith Work/zSolo/client/assets/photo1.avif" alt="Image 1" /> */}
        <img src="https://images.unsplash.com/photo-1551218372-458e7a497df5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80" alt="Image 2" />
        <img src="https://images.unsplash.com/photo-1595257841889-eca2678454e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Image 3" />
      </div>
    );
  }
}

export default Home;
