import React, { Component } from "react";
import "./App.css";
import News from "./News/News";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Here is todays news!</h1>
          <h2 className="App-subtitle">For those of you who can read Swedish...</h2>
        </header>
        <News />
      </div>
    );
  }
}

export default App;


//In Line 5 a class is created, and given the name "App". It is a component. Components are an already existing frame from React, and consist of elements. Elements are what you want to see on the screen, such as buttons, messages, and forms. In this case, the elements of this app are the individual news items that will be displayed on the page.

//Line 6, the app shall be executed/rendered, and the result (return, line 7) is an App (line 8) consisting of a header (lines 9-12) which holds a title (10) and subtitle (11). 

//In Line 13 the component "News" is imported. Everything from News.js will be placed here within the App.

