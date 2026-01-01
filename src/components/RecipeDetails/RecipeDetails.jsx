import React from "react";
import Style from "./RecipeDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { TbWorld } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";

const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error} = useQuery({
    queryKey: ["recipe", id],
    queryFn: async () => {
      // const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      // const data = await response.json();
      // return data.meals[0];
      return await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
    },
    staleTime: 8000, // 8 seconds
    cacheTime: 10000, // 10 seconds
    select: (data) => data.data.meals[0],
  });
  console.log(data);

  let ingredients = [];
  if (data) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = data[`strIngredient${i}`];
      const measure = data[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ ingredient, measure });
      }
    }
  }

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
      <section>
        <div className="py-8 ">
          <div className="container p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 rounded-lg shadow-lg p-6 flex flex-col lg:flex-row overflow-hidden gap-6">
              {/* //img */}
              <div className=" w-full lg:w-1/2  flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4 w-full text-left">
                  {data.strMeal}
                </h1>
                <img
                  src={data.strMealThumb}
                  alt={data.strMeal}
                  className="w-full h-auto rounded-2xl mb-4"
                />

                <div className="cursor-pointer mt-3 flex ">
                  <Link to={data.strSource} target="_blank">
                    <button className=" flex justify-between items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-700 hover:scale-105 duration-300 transition-all ">
                      <TbWorld />
                      Source
                    </button>
                  </Link>
                  <Link to={data.strYoutube} target="_blank">
                    <button className=" flex justify-between items-center gap-2 ml-3 px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-700 hover:scale-105 duration-300 transition-all ">
                      <FaYoutube />
                      youtube
                    </button>
                  </Link>
                </div>
              </div>
              {/* //instructions */}
              <div className="mt-6 lg:mt-12 lg:w-1/2 w-full">
                <p className="font-semibold">{data.strInstructions}</p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-lg shadow-lg p-5 self-start">
              <h1 className="text-3xl font-semibold mb-4">Ingredients</h1>

              <ul className="space-y-2">
                {ingredients.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b pb-1"
                  >
                    <span className="font-medium">{item.ingredient}</span>
                    <span className="text-gray-600">{item.measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeDetails;
