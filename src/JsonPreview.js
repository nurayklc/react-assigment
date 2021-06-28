import React, { Component } from "react";

export default class JsonPreview extends Component {
  
  render() {
    
    return (
      <div>
        <h3 className="m-4">{this.props.info.title}</h3>
        <div>
        {
          this.props.user && this.props.user.map(item =>{
            return(
              <ul className="list-none mx-4">
                 <li key={item.id}>{item.id + ". " + item.name}</li>
              </ul>
            );
          })
        }
        </div>
      </div>
    );
  }
}
