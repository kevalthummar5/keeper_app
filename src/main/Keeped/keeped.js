import Keepitem from "./keepitem/keepitem";
import "./keeped.css";
const Keeped = (props) => {
  const finry = props.keepitemarray;
  return (
    <div className="Keeped">
      {finry.map((item) => (
        <Keepitem
          key={item.id}
          title={item.title}
          date={item.date}
          desci={item.desci}
        ></Keepitem>
      ))}
    </div>
  );
};

export default Keeped;
