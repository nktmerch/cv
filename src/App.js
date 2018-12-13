import React, { Component } from 'react';
import './App.css';
import Styles from './styles.js';


class ProfilePicture extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      alt: false
    }  
  }
  
  handleHoverChange = () => {
    this.setState(Object.assign(this.state, {alt: !this.state.alt}));
  }
  
  getPicture(){
    return this.state.alt ? this.props.alt : this.props.def;
  }
  
  render() {
    const picture = this.getPicture();
      
    return(
      <div 
        style={Styles.ProfilePicture} 
        onMouseEnter={this.handleHoverChange} 
        onMouseLeave={this.handleHoverChange}>
        <img src={picture}></img>
      </div>
    );
  }
}

class Sidebar extends Component {
  buildList(){
    const pages = this.props.pages;
    for(let i = 0; i < pages.length; i++){
      
    }
  }
  
  render(){
    return(
      <div style={Styles.Sidebar}>
        
      </div>
    );
  }
}

class App extends Component {
  render() {
    
    //TODO: move this somewhere better, using webpack? 
    const defPicture = "https://goo.gl/pq4Wdh";
    const altPicture = "https://goo.gl/22JBBD";
    
    //Some links
    const linkedIn = "https://www.linkedin.com/in/nicholas-m-252227174/";
    const gitHub = "https://github.com/nktmerch/nktmerch.github.io/blob/master/README.md";
    
    //Yeah, same with this?
    const pages = ["about me", "cirriculum vitae", "things I like"];
    
    return (
      <div style={Styles.App}>
        <div style={Styles.Title}>
          <p>
            (Nicholas) Kiran Merchant
          </p>
        </div>
        <ProfilePicture def={defPicture} alt={altPicture}>
        </ProfilePicture>
        <div style={Styles.Bio}>
          <p>
            You can find more information on my 
            <a href={linkedIn}> LinkedIn </a>
            page, or check out my projects on
            <a href={gitHub}> GitHub </a>.
          </p>
        </div>
        <Sidebar pages={pages} selected={0}>
        </Sidebar>
      </div>
    );
  }
}

export default App;
