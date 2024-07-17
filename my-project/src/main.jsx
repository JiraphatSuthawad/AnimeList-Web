import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Random from "./Components/Page/Random";
import DetailView from "./Components/commons/DetailView";
import Catagory from "./Components/Page/Catagory";
import MidleSchool from "./Components/Page/Catagory/1/MidleSchool";
import Cycling from "./Components/Page/Catagory/2/Cycling";
import ElementarySchool from "./Components/Page/Catagory/3/ElementarySchool";
import Mermaid from "./Components/Page/Catagory/4/Mermaid";
import Android from "./Components/Page/Catagory/5/Android";
import AllGirlSchool from "./Components/Page/Catagory/6/AllGirlSchool";
import Vampire from "./Components/Page/Catagory/7/Vampire";
import Wrestling from "./Components/Page/Catagory/8/Wrestling";
import Samurai from "./Components/Page/Catagory/9/Samurai";
import Elf from "./Components/Page/Catagory/10/Elf";
import Trending from "./Components/Page/Trending";
import Favorite from "./Components/Page/Favorite";

const router = createBrowserRouter([
  { path: "/", element: <App /> },

  {
    path: "/Random",
    element: <Random />,
  },

  {
    path: "/Catagory",
    element: <Catagory />,
  },

  {
    path: "/Favorite",
    element: <Favorite />,
  },

  {
    path: "/DetailView",
    element: <DetailView />,
  },
  {
    path: "/Trending",
    element: <Trending />,
  },
  {
    path: "/Catagory/MidleSchool",
    element: <MidleSchool />,
  },
  {
    path: "/Catagory/Cycling",
    element: <Cycling />,
  },
  {
    path: "/Catagory/ElementarySchool",
    element: <ElementarySchool />,
  },
  {
    path: "/Catagory/Mermaid",
    element: <Mermaid />,
  },
  {
    path: "/Catagory/Android",
    element: <Android />,
  },
  {
    path: "/Catagory/AllGirlSchool",
    element: <AllGirlSchool />,
  },
  {
    path: "/Catagory/Vampire",
    element: <Vampire />,
  },
  {
    path: "/Catagory/Wrestling",
    element: <Wrestling />,
  },
  {
    path: "/Catagory/Samurai",
    element: <Samurai />,
  },
  {
    path: "/Catagory/Elf",
    element: <Elf />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
