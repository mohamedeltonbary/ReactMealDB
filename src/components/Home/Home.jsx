import React from "react";
import axios from "axios";
import Style from "./Home.module.css";
import { useQuery } from "@tanstack/react-query";
import { FaEarthAfrica } from "react-icons/fa6";
import { BeatLoader } from "react-spinners";
import CategoyBar from "../CategoyBar/CategoyBar";
import { Link } from "react-router-dom";
import RecipeDetails from "./../RecipeDetails/RecipeDetails";

const Home = () => {
  const { data, isError, isLoading, error} = useQuery({
    queryKey: ["AllMeals"],
    queryFn: async () => {
      return await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
    },
    staleTime: 8000, // 8 seconds
    cacheTime: 10000, // 10 seconds
    
    select: (data) => data?.data?.meals,
    // انا هنا عملت ف السيليكت يا ريس انو يخزن فيها بدل ما بعملها ف ال كونسول وهكتب تحت داتا
  });

  console.log(data); // = meals على طول

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
      <main>
        {/* <p className= {Style.pacifico }>Learn, Cook, Eat Your Food</p> */}
        <CategoyBar />
        
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
                <h2 className="text-xl font-bold ">{meal.strMeal}</h2>
                {/* <p className="text-gray-700">{meal.strInstructions.substring(0, 20)}...</p> */}

                <div className="flex items-center gap-2 mt-2 text-emerald-600">
                  <FaEarthAfrica />
                  <p className="font-semibold">{meal.strArea}</p>
                </div>
                <Link to={`/recipe/${meal.idMeal}`}>
                  <button className=" my-5 mt-4 px-4 py-4 flex bg-green-500 text-white rounded-4xl hover:bg-green-600 hover:scale-105 duration-300 transition-all cursor-pointer">
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

export default Home;
