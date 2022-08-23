import Card from "../../../ui/card";
import { useState } from "react";
import "./keepitem.css";

const Keepitem = (props) => {
  const [isdelete, setisdelete] = useState(false);
  const deletehandler = () => {
    setisdelete(true);
  };

  {
    if (!isdelete) {
      return (
        <Card>
          <div className="Keepitem">
            <h4>{props.date}</h4>
            <h2>{props.title}</h2>

            <p>{props.desci}</p>
            <button className="btn" onClick={deletehandler}>
              Delete
            </button>
          </div>
        </Card>
      );
    } else {
      return null;
    }
  }
};

export default Keepitem;
