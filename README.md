# React Responsive Menu Bar

### How to install
`npm install --save react-responsive-menubar`

### How to import into your component
```javascript
import NavBar from 'react-responsive-menubar/lib/NavBar';
```

### Usage Example

```javascript
import React, { Component } from 'react';
import NavBar from 'react-responsive-menubar/lib/NavBar';

class App extends Component {

  state = {showSideNav:false}

  handleSideNavToggle = ()=>{
      this.setState((currentState)=>{
          return {showSideNav: !currentState.showSideNav}
      })
  }

 render(){
   //Position of navbar container (header in this case) should be set torelative.
  return(
      <header className="header" style={{position:"relative"}}>
          <NavBar 
          handleSideNavToggle={this.handleSideNavToggle} 
          logo={'https://picsum.photos/200/300?image=10'} 
          showSideNav={this.state.showSideNav} 
          logoStyles={{height:"65px", width:"85px"}} 
          navBarStyles={{boxShadow:"none"}} 
          linkStyles={{color:"green", fontWeight:"bold"}}>

              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
              <a href="/">Random Link</a>
              <a href="/">Link Finder</a>
              <a href="/">Home Page</a>
              <a href="/">Sample Link</a>
              <a href="/">Sign in or join</a>
              <a href="/">Help</a>

          </NavBar>
      </header>
  )
 }
}
```

### API info (props passed)

| Prop        | Value           | Description  |
| ------------- |:-------------:| -----|
| logo      | URL | The image to be used as a logo |
| logoStyles      | {}      | A plain Javascript object holding style values for the logo. Ex- {height:"50px"} |
| navBarStyles | {}      | A plain Javascript object holding style values for the navBar (container). Ex- {boxShadow:"none"} |
| linkStyles | {}      | A plain Javascript object holding style values for the navigation links. Ex- {color:"red"} |
| showSideNav | true/false | A boolean variable, to specify the visibility of the side navigation bar on small screens. Initially set to false and can be toggled using a callback function. |
| handleSideNavToggle | A function  | A Javascript function that toggles the visibility of the  side navigation on small screen devices. It is usually triggered on the click event of a hamburger menu icon displayed on small screen devices|