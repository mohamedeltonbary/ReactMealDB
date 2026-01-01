import React from "react";
import Style from "./Categories.module.css";
import CategoyBar from "../CategoyBar/CategoyBar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaEarthAfrica } from "react-icons/fa6";
import { BeatLoader } from "react-spinners";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
  
const Categories = () => {
  const { name } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categoriesMeals", name],
    queryFn: async () => {
      return await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
      );
    },
    staleTime: 8000,
    select: (data) => data.data.meals,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BeatLoader color="#22c55e" size={15} />
      </div>
    );
  }
  if (isError) {
    return <div> Error: {error.message} </div>;
  }
  

  return (
    <>
      <CategoyBar />

      <main>
        {/* <CategoyBar/> */}
        <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 my-6 ">
          {data &&
            data.map((meal) => (
              <div
                key={meal.idMeal}
                className=" bg-blue-50  p-4 m-4 rounded-4xl shadow-lg hover:scale-105 transition duration-300 flex items-center  flex-col my-10 group "
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-[70%] h-auto  mb-8 rounded-full mt-[-50px] hover:scale-105 transition duration-700 shadow-lg group-hover:rotate-360 "
                />
                <h2 className="text-xl font-bold">
                  {meal.strMeal.split(" ").slice(0, 2).join(" ")}
                </h2>
                {/* <p className="text-gray-700">{meal.strInstructions.substring(0, 20)}...</p> */}

                <div className="flex items-center gap-2 mt-2 text-emerald-600">
                  {/* <FaEarthAfrica /> */}
                  <p className="font-semibold">{meal.strArea}</p>
                </div>
              <Link to={`/recipe/${meal.idMeal}`}>
                <button className=" my-5 mt-4 px-4 py-4 flex bg-green-500 text-white rounded-4xl hover:bg-green-600 hover:scale-105 duration-300 transition-all">
                  View Recipe
                </button>
              
              </Link>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default Categories;
