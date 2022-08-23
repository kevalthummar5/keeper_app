import Editor from "./Editor/editor";
import Keeped from "./Keeped/keeped";
import { useState } from "react";
import "./main.css";

const Main = () => {
  const [finalarray, setfinalarray] = useState([]);

  const objecthandler = (obj) => {
    console.log(obj);
    setfinalarray((prev) => {
      return [...prev, obj];
    });
  };

  return (
    <div className="Main">
      <Editor finalobject={objecthandler}></Editor>
      <Keeped Key={"h"} keepitemarray={finalarray}></Keeped>
    </div>
  );
};

export default Main;
