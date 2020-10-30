import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const ErrorMessage = {
    paddingTop: "2rem",
  }

const PageNotFound = () => {
    return (
        <div>
            <Header />
            <div class="container">
                <div style={ErrorMessage}>
                    <h1>404 Page Not Found</h1>
                    <a href="/">Home Page</a>
                </div>
            </div>
            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>
    )
  }
  
  export default PageNotFound;