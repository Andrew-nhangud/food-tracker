import refrigerateIcon from "../../assets/icons/refrigerate.svg";
import "./ToUseFood.css";

export const ToUseFood = () => {
  return (
    <section className="container">
      <h1 className="use-food-header">Use it soon</h1>
      <div className="use-food-container">
        <div className="use-food-card">
          <div className="use-food">
            <img src={refrigerateIcon} alt="" />
            <div className="use-food-detail">
              <h1>Chicken Breasts</h1>
              <p>Expired 1 day ago</p>
            </div>
          </div>
          <button className="btn">Toss it</button>
        </div>

        <div className="use-food-card">
          <div className="use-food">
            <img src={refrigerateIcon} alt="" />
            <div className="use-food-detail">
              <h1>Chicken Breasts</h1>
              <p>expired 1 day ago</p>
            </div>
          </div>
          <button className="btn">Toss it</button>
        </div>
      </div>
    </section>
  );
};
