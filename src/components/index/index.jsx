import React from "react";
import "./index.css";

function Index() {
  return (
    <div className="index">
    <div className="description">
        <h2>What do we aim for</h2>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          facilis modi fugit hic quam natus quod, non itaque, sit nam ipsum
          officia soluta veritatis nobis iste laboriosam tenetur id labore!
        </span>
      </div>
      <div className="index-goals-wrapper">
        <div className="goal-card">
          <i className="far fa-calendar-check"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            quidem ea repellendus expedita, maxime et velit nesciunt consectetur
            quae ab modi?
          </p>
        </div>
        <div className="main-goal-card">
          <i className="fas fa-compact-disc" id="spinning-disc"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            quidem ea repellendus expedita, maxime et velit nesciunt consectetur
            quae ab modi?
          </p>
        </div>
        <div className="goal-card">
          <i className="fas fa-podcast"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            quidem ea repellendus expedita, maxime et velit nesciunt consectetur
            quae ab modi?
          </p>
        </div>
      </div>
      <hr/>
      <div className="description">
        <h2>feel like talented dj?</h2>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          facilis modi fugit hic quam natus quod, non itaque, sit nam ipsum
          officia soluta veritatis nobis iste laboriosam tenetur id labore!
        </span>
      </div>
    </div>
  );
}

export default Index;
