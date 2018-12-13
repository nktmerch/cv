

// Title holds our name
const Title = {
  //Grid positioning
  gridArea: "title",
  
  //Styling
  fontSize: "40px",
  fontFamily: "'Futura', Times, serif",
}

// ProfilePicture holds our profile Picture
const ProfilePicture = {
  //Grid positioning
  gridArea: "profile_picture",
}

// Bio holds our bio
const Bio = {
  //Grid positioning
  gridArea: "bio",
  
  //Styling
  fontSize: "25px",
  fontFamily: "'Futura', Times, serif",
}

const Sidebar = {
  //Grid positioning
  gridArea: "side",
  
  //Styling
  fontSize: "30px",
  fontFamily: "'Futura', Times, serif",
}

// App wraps the rest of our reactJS page
const App = {
  //Grid positioning
  display: "grid",
  minWidth: "100%",
  minHeight: "100vh",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: ".25fr 1.5fr 1.125fr",
  gridTemplateAreas: `
                      '. title title side'
                      '. profile_picture . side'
                      '. bio bio side'
                     `                   
}

export default {
  Title: Title,
  ProfilePicture: ProfilePicture,
  Bio: Bio,
  App: App
}
