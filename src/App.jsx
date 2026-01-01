import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Sidepar from "./components/Sidepar/Sidepar";
import Home from "./components/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoyBar from "./components/CategoyBar/CategoyBar";
import Categories from "./components/Categories/Categories";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

function App() {
  // const [count, setCount] = useState(0);
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "categoyBar", element: <CategoyBar /> },
        { path: "categories/:name", element: <Categories /> },
        { path: "recipe/:id", element: <RecipeDetails /> },
        { path: "*", element: <div>404 Not Found</div> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
