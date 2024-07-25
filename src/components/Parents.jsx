import { useState } from "react";
import Child from "./Child";
import FunctionChild from "./FunctionChild";

export default function Parent() {
    const [name, setName] = useState("Guest");

    const changeHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <div className="parent-box">
            <input type="text" value={name} onChange={changeHandler} placeholder="enter a name" />
            <p>Name is : {name}</p>
            <Child name={name} />
            <FunctionChild name={name} />
        </div>
    );
}