import { useEffect, useState } from "react";

export default function FunctionChild(props) {
  const [upperCaseName, setUpperCaseName] = useState(props.name.toUpperCase());

  useEffect(()=>{
    console.log("Function Child Component useEffect executed");
    setUpperCaseName(props.name.toUpperCase());
  },[props])

  return (
    <div className="child-box">
      <p> Name from parent : {props.name}</p>
      <p> Name in Uppercase (Child) : {upperCaseName}</p>
    </div>
  );
}
