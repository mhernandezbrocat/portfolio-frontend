import React, { useState } from "react";

const Probox = ({
  title,
  img,
  description,
  techno1,
  techno2,
  code,
  demo,
  scrollY,
  icon,
  cName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(demo, "_blank");
  };

  return (
    <div className={`pro pro__1 ${cName}`}>
      <div
        className={`pro__img ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          src={img}
          style={{ transform: isHovered ? `translateY(${scrollY})` : "none" }}
        />
      </div>
      <div className="pro__text">
        <h3>
          {title} <span>{icon}</span>
        </h3>
        <p>{description}</p>
        <div className="stack">
          <p>{techno1}</p>
          <p>{techno2}</p>
        </div>
        <div className="links">
          <a href={code} target="_blank">
            Code
            <i className="fa-brands fa-github link-icon-git"></i>
          </a>
          <a href={demo} target="_blank">
            Live Demo
            <i className="fas fa-external-link-alt link-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Probox;
