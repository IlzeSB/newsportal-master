import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url =
      'https://newsapi.org/v2/top-headlines?country=se&apiKey=ae24bb6763034855bf26908e36dcd782';
    fetch(url)
      .then(response => response.json())
      .then((jsonData) => {
        this.setState({
          news: jsonData.articles
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.news.map(item => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;

//News is a component which consists of all of the news stories as one collective thing, as opposed to the individual items we see in NewSingle. 

//In lines 4-10, the component is created and it's state is set, it is an empty array called "news", as denoted by []. 

//Line 12 componentDidMount - this ensures that the component is immediately called into use when the browser opens or refreshes. 

//Line 13-14 The variable, url, is linked to here. This is where you put the API, together with the API key.

//Line 15-16 The function fetch will collect the data provided from the API and return with a HTTP response(promise). The json is extracted from the response: .then(response => response.json())

//In lines 17-19 the data returned from fetch is pushed up to the empty array in the state created in lines 7-10.

//Line 22 in the event of an error this will be caught, and an error message will display, which varies from browser to browser.

//Line 25-29 Here the Items (cards) are rendered, which means they are made. The information from the api is "mapped", that is to say every element in the array is called upon, in order, and a new array is formed out of the results. This is the information that will be shown on ear item ("card", see NewSingle). The information from NewSingle.js is imported here (line 27).

//Line 31-34 The results returned from the rendering (the items) shall be displayed in a "row", by using Bootstrap grid, which is subsequently further described in the CSS file.


