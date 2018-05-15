import React from "react";

const NewSingle = ({ item }) => (
  <div className="col s6">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title} />
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank"> 
          Read more...
        </a> 
      </div>
    </div>
  </div>
);

export default NewSingle;


//NewSingle is a component and refers to the individual news headlines, all of which are clickable and take the user to the full news story.

//The variable NewSingle is created in line 3, it is an item (as opposed to a button, for example).

//Line 4 uses the grid (12 columns wide) to lay out the items so that they occupy 6 columns each, meaning that there is space for two items per row.

//The item has the classNAme "card" (line 5), and on the card there is an image, a title (the name of the news source) and a piece of content (the headline). 

//The image, title and content are grouped on the card, the information being fetched by the api, which is referenced to in lines 6, 8 and 11.

//Line 14 - Here you see what happens when the user clicks on "read more" - they are linked to an external page provided by the api, which opens in a new tab.