const Card = (props) => {
  return (
    <div className="container">
      <div className="card">
        <img src={props.img} alt="" />
        <div className="title">{props.title || "Card"}</div>
        <button className="btn">Button </button>
      </div>
    </div>
  );
};
export default Card;
