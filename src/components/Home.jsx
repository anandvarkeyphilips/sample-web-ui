import React, { Component } from "react";

class Home extends Component {
  render() {
    let name = "Anand Varkey Philips";
    let salary = "10000";
    return (
      <>
        <div>
          <h1>Hi from Home</h1>
          <p>My name is {name} and my salary is {salary}</p>
        </div>
      </>
    );
  }
}

export default Home;
