import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";

const Navbars = ({ inputData, setInputData }) => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const addInput = (e) => {
    setInputData(e.target.value);
  };

  return (
    <Navbar isBordered maxWidth="full" className=" light  ">
      <NavbarBrand className="col-span-2 ">
        <NavbarContent className="mr-4 ">
          <NavbarItem className=" font-bold text-5xl text-inherit text-black focus-in-expand-fwd  ">
            AnimeList
          </NavbarItem>
        </NavbarContent>
      </NavbarBrand>

      <NavbarBrand className="flex sm:flex gap-3 mx-10">
        <NavbarItem>
          <Link
            to="/"
            className=" font-bold text-xl  text-black hover:text-pink-500 "
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="/Favorite"
            className=" font-bold text-xl  text-black hover:text-red-400"
          >
            Favorite
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="/Catagory"
            className=" font-bold text-xl  text-black hover:text-sky-400"
          >
            Catagory
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="/Random"
            className=" font-bold text-xl  text-black hover:text-violet-600"
          >
            Random
          </Link>
        </NavbarItem>
      </NavbarBrand>
      <NavbarItem className="flex  ">
        <Input
          key="inside"
          type="text"
          label="Seaching.."
          size="sm"
          onChange={addInput}
          className="w-4/4 justify-end items-end"
        />
      </NavbarItem>
    </Navbar>
  );
};

export default Navbars;
