import React, { Component } from 'react';
import './App.css';
import Styles from './styles.js';

//Functions for faster preloading
function displayNone(object){
  Object.assign(object, {display: "none"});
  return object;
}

function displayGrid(object){
  Object.assign(object, {display: "grid"});
  return object;
}

function getMainStyle(pageNum, currPage){
  let MainStyle = {};
  Object.assign(MainStyle, Styles.Main);
  if(pageNum === currPage){
    return displayGrid(MainStyle);
  }else{
    return displayNone(MainStyle);
  }
}

//A custom wrapping for our hyperlinks
class Link extends Component {
  //Get the link, and wrap it in parentheses
  render() {
    //Set up link attributes
    const rel = "noopener noreferrer";
    const target = "_blank";
    const href = this.props.href;
    const name = this.props.name;
  
    return <a rel={rel} target={target} href={href}>{name}</a>;
  }
}


class Sidebar extends Component {
  createPage = (page, index) => {
    const currPage = this.props.currPage;
    const Style = (currPage === index) ? Styles.Clicked : null;
    return(
      <p 
        key={index}
        className ="page"
        style={Style}
        onClick={() => this.props.updatePage(index)}>
        {page}
      </p>
    );
  }
  
  buildList() {
    const pages = this.props.pages;
    return pages.map(this.createPage);
  }
  
  render(){
    const listOfPages = this.buildList();
    
    //Handle page resizing 
    //If I did this any more frequently I would create a global context
    const small = this.props.small;
    const Style = small ? Styles.Topbar : Styles.Sidebar
    
    //Render the sidebar
    return <div style={Style}>{listOfPages}</div>;
  }
}

class Title extends Component {
  render() {
    const title = this.props.title;
    
    return(
      <div style={Styles.Title}>{title}</div>
    );
  }
}

//Displays my profile picture
class ProfPic extends Component {
  //State contains the photo currently displayed
  constructor(props){
    super(props);
    this.state = {
      alt: false
    }  
  }
  
  //Handle switching pictures on mouseover
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
        style={Styles.ProfPic} 
        onMouseEnter={this.handleHoverChange} 
        onMouseLeave={this.handleHoverChange}>
        <img src={picture} alt="that sure is me!"></img>
      </div>
    );
  }
}

class Who extends Component {
  render() {
    
    //Set up the hyperlink to my LinkedIn
    const linkedInURL = "https://www.linkedin.com/in/nicholas-m-252227174/";
    const linkedIn = <Link href={linkedInURL} name="LinkedIn" />;
    
    //Set up the hyperlink to my GitHub
    const gitHubURL = "https://github.com/nktmerch";
    const gitHub = <Link href={gitHubURL} name="GitHub"/>;
    
    //Set up the hyperlink to my email
    const emailURL = "mailto:nicholas_merchant@brown.edu";
    const email = <Link href={emailURL} name="nicholas_merchant@brown.edu"/>
    
    //Set up my profile photo
    const defPicture = "https://raw.githubusercontent.com/nktmerch/cv/master/public/profile_picture.jpg";
    const altPicture = "https://raw.githubusercontent.com/nktmerch/cv/master/public/profile_alt.jpg";
    
    //Get the style
    const currPage = this.props.currPage;
    const MainStyle = getMainStyle(0, currPage);
    
    return (
      <div style={MainStyle}>
        {/*My profile picture*/}
        <ProfPic def={defPicture} alt={altPicture}/>
        
        {/*My Bio*/}
        <div style={Styles.Text.Medium}>
          <p>
            My name is Kiran, I'm a Junior studying Computer Science 
            at Brown University. You can find more information on my 
            ({linkedIn}) page, check out my projects on ({gitHub}), or click
            one of the links on the side to read more.
          </p>
          <p>
            If you want to get in touch with me for whatever reason, 
            send an email to ({email}).
          </p>
          <br></br> 
        </div>  
      </div>
    );
  }
}

class CV extends Component {
  render() {

    //Set up links
    const cs19URL = "https://cs.brown.edu/courses/cs019/2017/";
    const cs19 = <Link href={cs19URL} name="CS19"/>;
    
    const cs33URL = "http://cs.brown.edu/courses/cs033/";
    const cs33 = <Link href={cs33URL} name="CS33"/>;
    
    const cs32URL = "http://cs.brown.edu/courses/cs032/";
    const cs32 = <Link href={cs32URL} name="CS32"/>;

    const cs195URL = "http://cs.brown.edu/courses/cs195y/2019/";
    const cs195 = <Link href={cs195URL} name="CS195"/>;

    const cs173URL = "https://cs.brown.edu/courses/cs173/2019/";
    const cs173 = <Link href={cs173URL} name="CS173"/>;

    const cs147URL = "http://cs.brown.edu/courses/csci1470/";
    const cs147 = <Link href={cs147URL} name="CS147"/>;

    const weiboURL = "https://docs.google.com/document/d/10bVrTpSnOpZd_E_Yxo_dPzL3NomuoLVy6RFqoq2fkvY/edit";
    const weibo = <Link href={weiboURL} name="Here"/>;
    
    const bprURL = "http://www.brownpoliticalreview.org/2018/11/microscopic-threat-massive-implications-2/";
    const bpr = <Link href={bprURL} name="This"/>;
    
    const ginaURL = "https://docs.google.com/document/d/1A-n8qFPaKBc0LG8uwj_vJJoxYGgA_D8S08ddCpLd_dA/edit";
    const gina = <Link href={ginaURL} name="This"/>;
    
    //Get the style
    const currPage = this.props.currPage;
    const MainStyle = getMainStyle(1, currPage);
    
    return (
      <div style={MainStyle}>
        <p style={Styles.Text.Header}>Technical Skills</p>
        <p style={Styles.Text.Body}>
          I am proficient in Java and Python, as well as
          frontend web applications using HTML5, CSS, JavaScript,
          and contemporary web technologies like ReactJS. I am familiar with C,
          and am independently learning Haskell and SQL. I am versed in
          Object Oriented and Functional Programming best practices as well as full 
          stack design for applications. In my classes, I have come into frequent
          contact with academic languages, including Formal Verification using 
          Dafny and Alloy and Language Design using Racket. 
        </p>
        <p style={Styles.Text.Header}>(Relevant) Classes I've Taken</p>
        <p style={Styles.Text.Body}>
          In Computer Science, I've studied Functional Programming and basic 
          data structures in ({cs19}), the low level structure of computer 
          systems in ({cs33}), software engineering principles in ({cs32}), 
          and Formal Verification methods in ({cs195}). I am currently taking
          ({cs173}), a class on programming language design, and ({cs147}), 
          an introduction to Deep Learning.
        </p>
        <p style={Styles.Text.Header}>Work Experience</p>
        <p style={Styles.Text.Body}>
          I spent the last summer as an intern at IPlytics GmbH, an intellectual property
          intelligence company that aggregated global patent data, analyzed it, and provided
          insights using an online platform. I worked with the company while it was transitioning
          towards continuous integration, and I helped build out the neccesary pipelines, 
          developing a frontend testing suite based on Selenium and Java 8 that allowed testers to write 
          simple, declarative walkthroughs modeling user behavior on the platform, with a focus on ensuring 
          test stability on inconsistent browsers without sacrificing the speed of the testing suite. 
        </p>
        <p style={Styles.Text.Header}>Teaching Experience</p>
        <p style={Styles.Text.Body}>
          I was an undergraduate teaching assistant for ({cs32}), where I contributed to
          course design, graded projects, held hours, and mentored two student teams in developing
          their own independent final project.
        </p>
        <p style={Styles.Text.Header}>Some Writing</p>
        <p style={Styles.Text.Body}>
          I wrote a research paper on surveillance in Xinjiang, concerning the detention of 
          Uyghur minorities in the reigon. The bulk of the tecnical work involved web scraping 
          censored posts from the Chinese social media site Weibo, and analyzing them qualitatively 
          to uncover narratives of detention in the mainland China. You can find the peice ({weibo}).
          If you want to read some of my journalistic writing, check out ({bpr}) piece for the Brown 
          Political Review on the global Tuberculosis epidemic, or ({gina}) unpublished academic piece 
          on the Station nightclub fire in Rhode Island.
        </p>
        <p style={Styles.Text.Header}>Outside Interests</p>
        <p style={Styles.Text.Body}>
          I am an Outdoor Guide by training, with WFA and CPR certifications as 
          well as significant experience leading technical outings, mostly Rock 
          Climbing, Skiing, and Backpacking trips. I am currently a leader for the Brown 
          Outing Club, running outdoor trips and education for the greater Brown 
          community.
        </p>
      </div>
    );
  }
}

class Stuff extends Component {
  render() {  
    //Set up media embedding
    const spotifyURL = "https://open.spotify.com/embed/user/12133708412/playlist/3pf7cfPm73EO3gd0mjmouk";
    
    const youtubeURL = "https://www.youtube.com/embed/ZRTNHDd0gL8";
    const youtubeAllows = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    
    //Set up links
    const nytRecipieURL = "https://cooking.nytimes.com/recipes/1019772-spiced-chickpea-stew-with-coconut-and-turmeric";
    const nytRecipieImage = "https://static01.nyt.com/images/2018/11/28/dining/28Romanrex1/merlin_143092557_a19cb00a-d1f1-4d42-83be-e4ac865d2f96-articleLarge.jpg";
    const nytRecipieAlt = "spiced chickpea stew";
    const rel = "noopener noreferrer";
    const target = "_blank";
    
    //Get the style
    const currPage = this.props.currPage;
    const MainStyle = getMainStyle(2, currPage);
    
    return(
      <div style={MainStyle}>
        <p style={Styles.Text.Medium}>
          This video of Adam Ondra
        </p>
        <div 
          style={{maxWidth: "100%"}}>
          <iframe 
            title="youtube" 
            width="560" 
            height="315" 
            src={youtubeURL}
            frameBorder="0" 
            allow={youtubeAllows}
            allowFullScreen>
          </iframe>
        </div>
        <br></br>
        <br></br>
        <p style={Styles.Text.Medium}>
          This Spotify playlist
        </p>
        <div>
          <iframe 
            title="spotify" 
            width="300" 
            height="380" 
            src={spotifyURL}
            frameBorder="0" 
            allowtransparency="true" 
            allow="encrypted-media">
          </iframe>
        </div>
        <br></br>
        <br></br>
        <p style={Styles.Text.Medium}>
          This recipe from the New York Times
        </p>
        <a href={nytRecipieURL} rel={rel} target={target}>
          <img style={{maxWidth: "100%"}} src={nytRecipieImage} alt={nytRecipieAlt}/>
        </a>
        <br></br>
        <br></br>
        <p style={Styles.Text.Medium}>
          More coming!
        </p>
        <br></br>
        <br></br>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      currPage: 0,
    }  
  }
  
  //Handle resizing for small screens
  updateAppWidth = () => {
    console.log("firing");
    this.setState(Object.assign(this.state, {width: window.innerWidth}));
  }
  
  componentDidMount(){
    this.updateAppWidth();
  }
  
  updatePage = (index) => {
    this.setState(Object.assign(this.state, {currPage: index}));
  } 
  
  render() {
    //The pages for the navigation menu (sidebar)
    const pages = ["who is that", "curriculum vitae", "things I like"];
    
    //The page that is currently selected
    const currPage = this.state.currPage;
    
    //What to do on page update
    const updatePage = this.updatePage;
    
    //The title to display
    const title = "(Nicholas) Kiran Merchant";
    
    //Get the current page
    //const main = this.getPage();
    
    //Check the page width! (could do this with global context)
    const width = this.state.width;
    let Style, small;
     if (width <= 375) {
       Style = Styles.SmallApp;
       small = true;
     } else{
       Style = Styles.App;
       small = false;
     }
    
    return (
      <div style={Style}>
        {/*Color the top corner*/}
        <div style={Styles.Corner}></div>
        
        {/*Our sidebar*/}
        <Sidebar 
          updatePage={updatePage} 
          pages={pages} 
          currPage={currPage}
          small={small}>
        </Sidebar>
        
        {/*My name!*/}
        <Title title={title} />
        
        {/*Whatever main page is selected*/}
        <Who currPage={currPage} />
        <CV currPage={currPage} />
        <Stuff currPage={currPage} />
      </div>
    );
  }
}

export default App;
