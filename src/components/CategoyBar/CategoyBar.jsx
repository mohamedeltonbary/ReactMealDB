import React from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Style from "./CategoyBar.module.css";

const CategoyBar = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const Categories = [
    { name: "All" },
    { name: "Beef" },
    { name: "Breakfast" },
    { name: "Chicken" },
    { name: "Dessert" },
    { name: "Goat" },
    { name: "Lamb" },
    { name: "Miscellaneous" },
    { name: "Pasta" },
    { name: "Pork" },
    { name: "Seafood" },
    { name: "Side" },
    { name: "Starter" },
    { name: "Vegan" },
    { name: "Vegetarian" },
  ];

  const handleSelectChange = (e) => {
    if (e.target.value === "All") {
      navigate("/"); // لو All يروح للصفحة الرئيسية
    } else {
      navigate(`/categories/${e.target.value}`);
    }
  };

  return (
    <>
      {/* select للموبايل */}
      <p className={Style.pacifico}>Learn, Cook, Eat Your Food</p>

      <div className="md:hidden">
        <select
          className="w-full p-2 rounded-2xl shadow-lg hover:scale-105 transition duration-300 flex items-center flex-col my-10 groupb bg-blue-50"
          value={name || "All"}
          onChange={handleSelectChange}
        >
          {Categories.map((category) => (
            <option
              key={category.name}
              value={category.name}
              className="p-2 m-2 rounded-2xl shadow-lg hover:scale-105 transition duration-300 flex items-center flex-col my-10 group"
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* البار العادي (ديسكتوب) */}
      <div className="flex-wrap gap-4 py-8 px-2 hidden md:flex">
        {Categories.map((category) => {
          const path =
            category.name === "All" ? "/" : `/categories/${category.name}`;
          return (
            
            //  استخدمت هنا ناف لينك عشان حته لمااضغط ع الزرار اللون يتغير ويثبت ع اخر حاجه انا ضغطت عليها
            <NavLink
              key={category.name}
              to={path}
              className={({ isActive }) =>
                `border py-2 px-4 rounded-2xl transition-all duration-300 shadow-2xl cursor-pointer ${
                  isActive
                    ? "bg-black text-amber-50"
                    : "text-[#57595B] hover:bg-[#f3f5ff] hover:scale-105 border-[#8f9193]"
                }`
              }
            >
              {category.name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default CategoyBar;
