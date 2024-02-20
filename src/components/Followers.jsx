import "/src/styles/followers.css";

function Followers({
  logo,
  username,
  number,
  definition,
  arrow,
  days,
  ClassColor,
  result,
}) {
  return (
    <>
      <div id="top_card_container" className={ClassColor}>
        <div className="top_card">
          <img src={logo} alt="logo" />
          {username}
        </div>
        <div className="definition_numberF">
          <div className="followers_number">{number}</div>
          <div className="definition">{definition}</div>
        </div>
        <div className={result} id="today">
          <img src={arrow} alt="arrow" className="arrow" />
          {days} Today
        </div>
      </div>
    </>
  );
}

export default Followers;
