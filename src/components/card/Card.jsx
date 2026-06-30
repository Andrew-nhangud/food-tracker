import refrigerateIcon from "../../assets/icons/refrigerate.svg";
import "./card.css";

export const Card = ({ IconUrl, cardAlt, cardTitle, ExpireDate }) => {
  return (
    <section className="container">
      <div className="card">
        <div className="card-stat">
          <div className="card-details-wrapper">
            <img src={IconUrl} alt={cardAlt} />
            <div className="card-details">
              <h1>{cardTitle}</h1>
              <p>{ExpireDate}</p>
            </div>
          </div>
          <button className="card-btn">Mark used</button>
        </div>
      </div>
    </section>
  );
};
