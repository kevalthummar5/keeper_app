import Card from "../../ui/card";
import "./editor.css";
import { useRef } from "react";

const Editor = (props) => {
  const titleref = useRef(null);
  const desciref = useRef(null);
  let finobj = {};
  const d = new Date();
  let datestr = `${d.toLocaleTimeString()},${d.toDateString()}`;
  console.log(datestr);
  if (datestr.length == 26) {
    datestr = `0${datestr}`;
  }
  let timesetter = `${datestr.slice(0, 1)}`;
  console.log(timesetter);
  let datetime = `${datestr.slice(0, 5)} ${datestr.slice(
    9,
    12
  )} ${datestr.slice(20, 22)} ${datestr.slice(16, 19)} ${datestr.slice(23)}`;
  const id1 = Math.random().toString().slice(7, 11);

  const submithandler = (e) => {
    e.preventDefault();

    finobj.id = id1;
    finobj.title = titleref.current.value;
    finobj.date = datetime;
    finobj.desci = desciref.current.value;
    props.finalobject(finobj);

    titleref.current.value = "";
    desciref.current.value = "";
  };

  return (
    <div className="Editor">
      <Card>
        <form className="Form1" onSubmit={submithandler}>
          <input
            className="Text Textinput"
            type="text"
            placeholder="Title"
            ref={titleref}
            required
          />
          <textarea
            type="textarea"
            className="Text area"
            placeholder="Enter a description"
            ref={desciref}
            required
          />
          <input className="Submit" type="submit" value="Add" />
        </form>
      </Card>
    </div>
  );
};

export default Editor;
