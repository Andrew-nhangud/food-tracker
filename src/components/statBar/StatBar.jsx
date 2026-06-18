import "./StatBar.css";

export const StatBar = () => {
  return (
    <section className="container stat-contianer ">
      <div className="stat-card">
        {/* markup to show things you have in your fridge*/}
        <div className="stat-box">
          <h1>in your fridge</h1>
          <p>
            6<span>items</span>
          </p>
        </div>
        {/* markup to show things that are to expire fridge*/}
        <div className="stat-box">
          <h1>expiring soon</h1>
          <p className="best-before-color">
            3<span>items</span>
          </p>
        </div>
        {/* markup to show things that have expired fridge*/}
        <div className="stat-box">
          <h1>past their prime</h1>
          <p className="expire-color">
            1<span>items</span>
          </p>
        </div>
        {/* markup to show things you have saved from expiring fridge*/}
        <div className="stat-box">
          <h1>saved from waste</h1>
          <p className="saved-color">
            12<span>items</span>
          </p>
        </div>
      </div>
    </section>
  );
};
