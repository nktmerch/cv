
const Corner = {
  //Grid positioning
  gridArea: "corner",
  
  //Styling
  background: "#CE7926",
}

const Sidebar = {
  //Grid positioning
  gridArea: "side",
  
  //Styling
  padding: "10%",
  paddingTop: "0",
  textAlign: "right",
  fontSize: "30px",
  fontFamily: "Futura, Times, serif",
  background: "#CE7926",
}

const Topbar = {
  //Grid positioning
  gridArea: "top",
  
  //Styling
  padding: "10%",
  paddingTop: "0",
  textAlign: "center",
  fontSize: "35px",
  fontFamily: "Futura, Times, serif",
  background: "#CE7926",
}

const Clicked = {
  //Styling
  color: "#A40705",
}

// Title holds our name
const Title = {
  //Grid positioning
  gridArea: "title",
  
  //Styling
  padding: "0",
  paddingTop: "3%",
  paddingLeft: "3%",
  fontSize: "40px",
  fontFamily: "Futura, Times, serif",
}

//My profile picture
const ProfPic = {
  //Styling
  maxWidth: "43%",
  paddingLeft: "5%",
}

//For section headers
const Header = {
  //Styling
  marginTop: "0",
  fontSize: "25px",
  fontWeight: "bold",
  fontFamily: "Futura, Times, serif",
}

//Mostly just for the Bio
const Medium = {
  //Styling
  marginTop: "0",
  fontSize: "25px",
  fontFamily: "Futura, Times, serif",
}

//For smaller body paragraphs
const Body = {
  //Styling
  paddingLeft: "2%",
  fontSize: "20px",
  fontFamily: "Futura, Times, serif",
}

const Text = {
  Header: Header,
  Medium: Medium,
  Body: Body,
}

const Main = {
  //Grid positioning
  gridArea: "main",
  
  //Styling
  paddingTop: "0",
  paddingLeft: "5%",
  align: "left",
}

// App wraps the rest of our reactJS page
const App = {
  //Grid positioning
  display: "grid",
  minWidth: "100%",
  minHeight: "100vh",
  gridTemplateColumns: "1fr 2fr 1fr",
  gridTemplateRows: "125px .825fr",
  gridTemplateAreas: `
                      'corner title title'
                      'side main .'
                     `,              
}

const SmallApp = {
  //Grid positioning
  display: "grid",
  minWidth: "100%",
  minHeight: "100vh",
  gridTemplateColumns: "375px",
  gridTemplateRows: "300px 0.25fr 1fr",
  gridTemplateAreas: `
                      'top'
                      'title'
                      'main'
                     `,         
}

export default {
  Corner: Corner,
  Sidebar: Sidebar,
  Topbar: Topbar,
  Clicked: Clicked, 
  Title: Title,
  ProfPic: ProfPic,
  Text: Text,
  Main: Main,
  App: App,
  SmallApp: SmallApp,
}
