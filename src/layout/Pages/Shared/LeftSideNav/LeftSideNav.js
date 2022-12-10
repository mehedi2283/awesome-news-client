import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  let activeStyle = {
    textDecoration: "underline",
    
    textDecorationColor: "rgb(0, 8, 255)",
    textDecorationThickness: "3px",
    fontWeight: "700",
    color: "rgba(0, 8, 255, 0.715) ",
  };

  return (
    <div className="shadow p-3 rounded left-container">
      <h4>Total Categories:{categories.length}</h4>
      <div className="link">
        {categories.map((category) => (
         
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p className="align-middle">{category.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
