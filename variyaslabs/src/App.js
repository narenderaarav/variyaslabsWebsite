import React from 'react'
import Header from './layout/header.layout'
import Footer from './layout/footer.layout'
import Home from './pages/home.page'
import Contact from './pages/contact.page'
import Technologies from './pages/technologies.page'
import Services from './pages/services.page'
import Blog from './pages/blog.page'
import './App.css'
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom";
import BlogDetails from './pages/blogDetails'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
       <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/contact' exact component={Contact} />
       <Route path='/technologies' exact component={Technologies}/>
       <Route path='/web-development' exact component={Services}/>
       <Route path='/mobile-app-development' exact component={Services}/>
       <Route path='/devops' exact component={Services}/>
       <Route path='/blogs' exact component={Blog}/>
       <Route path='/blog-details/:id' exact component={BlogDetails}/>
      
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
