import { Component, useState } from "react";

// export default class Greeter extends Component {
//   constructor() {
//     super();
//     this.state = { name: "Unknown" };
//     this.changeHandler = this.changeHandler.bind(this);
//   }

//   changeHandler(e) {
//     this.setState({
//       name: e.target.value.toUpperCase(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Greeter</h1>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.changeHandler}
//           placeholder="Enter Name"
//         />
//         <p>Hello {this.state.name}</p>
//       </div>
//     );
//   }
// }

export default function Greeter(){

    const [name, setName] = useState("Unknown");

    const changeHandler = (e) =>{
        setName(e.target.value.toUpperCase());
    }

    return(
        <div>
            <h1>Greeter</h1>
            <input type="text" value={name} onChange={changeHandler} placeholder="Enter Name"/>
            <p>Hello {name}</p>
        </div>
    )

}
