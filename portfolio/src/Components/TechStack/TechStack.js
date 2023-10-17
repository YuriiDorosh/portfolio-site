import React, { useState } from "react";
import "./TechStack.css";

const TechStack = () => {
  const data = [
    {
      name: "Python",
    },
    {
      name: "Django",
    },
    {
      name: "GitHub",
    },
    {
      name: "SQLite",
    },
    {
      name: "Bash",
    },
    {
        name: "PostgreSQL",
    },
    {
      name: "DRF",
    },
    {
      name: "Docker",
    },
    {
      name: "Html",
    },
    {
      name: "Css",
    },
    {
      name: "C",
    },
    {
      name: "FastAPI",
    },
    {
      name: "JavaScript",
    },
    {
        name: "MongoDB",
    },
    {
      name: "React",
    },
    {
        name: "C#",
    },
  ];

  const colors = [
    "49AD09",
    "#9FE2BF",
    "#6495ED",
    "#DE3163",
    "#454545",
    "#C0C0C0",
    "#800000",
    "#800080",
    "#FF00FF",
    "#000080",
    "#00FFFF",
    "#00FF00",
    "#86105B",
    "#000080",
    "#454545",
    "#6495ED",
    "#C0C0C0",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);
  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container tech-stack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index + 1}>
            <div className="tech-content">
              <span
                className="tech-number"
                style={{ backgroundColor: colors[index + 1] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default TechStack;