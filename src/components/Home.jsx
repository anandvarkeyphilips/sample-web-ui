import React, { Component } from "react";

class Home extends Component {
  render() {
    let name = "Anand Varkey Philips";
    let salary = "10000";
    let favItems = ["Apple","Mango","Orange"]
    let married = true;
    return (
      <>
        <div>
          <h1>Hi from Home</h1>
          <p>My name is {name} and my salary is {salary}</p>
          <ul>
            {
              favItems.map((item,index)=>{
                return <li key={index}> {item} </li>
              })
            }
          </ul>
          { married ? <p>He is maried</p> : <p>He is single</p>}
        </div>
      </>
    );
  }
}

export default Home;
