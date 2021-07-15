const Card = () => {
  const Image = () => {
    return (
      <img
        src="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png"
        alt="img"
      />
    );
  };
  return (
    <div className="card">
      <Image />
      <h1>React Card</h1>
      <p>This is a Card.</p>
    </div>
  );
};
export default Card;
