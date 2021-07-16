import THA1 from "./THA1";
const Card = (props) => {
  return (
    <div className="cont">
      <THA1 name="Apple" price="60" />
      <THA1 name="Banana" price="20" />
      <THA1 name="Orange" price="50" />
      <THA1 name="Water Melon" price="45" />
      <THA1 name="Pineapple" price="90" />
      <THA1 name="Grapes" price="55" />
      <THA1 name="Date" price="35" />
    </div>
  );
};
export default Card;
