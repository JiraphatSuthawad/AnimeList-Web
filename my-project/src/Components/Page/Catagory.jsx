import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, ButtonGroup } from "@nextui-org/button";
import Navbars from "../commons/Navbars";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Catagory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const animeCategories = async () => {
      try {
        const res = await axios.get(`https://kitsu.io/api/edge/categories`, {
          params: {
            "page[limit]": 10,
            "page[offset]": 0,
          },
        });
        setData(res.data.data);
      } catch (err) {
        console.log("Error", err);
      }
    };

    animeCategories();
  }, []);

  console.log(data);
  return (
    <div className=" h-dvh cat-bg">
      <Navbars />
      <div className="flex justify-center mt-7 ">
        <div className="grid grid-cols-5 gap-x-10 gap-y-0 group w-fit  ">
          <Link
            to="/Catagory/MidleSchool"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[0]?.attributes?.title}
                className="object-cover "
                src="https://media.kitsu.io/anime/poster_images/1903/medium.jpg"
                width={270}
                height={300}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[0]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            to="/Catagory/Cycling"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[1]?.attributes?.title}
                className="object-cover"
                src="https://media.kitsu.io/anime/poster_images/8635/original.jpg"
                width={270}
                height={380}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[1]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            to="/Catagory/ElementarySchool"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[2]?.attributes?.title}
                className="object-cover"
                src="https://media.kitsu.io/anime/poster_images/8080/medium.jpg"
                width={270}
                height={380}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[2]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            to="/Catagory/Mermaid"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[3]?.attributes?.title}
                className="object-cover"
                src="https://media.kitsu.io/anime/poster_images/82/medium.jpg"
                width={270}
                height={380}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[3]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            to="/Catagory/Android"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[4]?.attributes?.title}
                className="object-cover"
                src="https://media.kitsu.io/anime/poster_images/37/medium.jpg"
                width={270}
                height={380}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[4]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            to="/Catagory/AllGirlSchool"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[5]?.attributes?.title}
                className="object-cover"
                src="https://media.kitsu.io/anime/poster_images/8137/medium.jpg"
                width={270}
                height={380}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[5]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            to="/Catagory/Vampire"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[6]?.attributes?.title}
                className="object-cover"
                src="https://media.kitsu.io/anime/poster_images/147/medium.jpg"
                width={270}
                height={380}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[6]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            to="/Catagory/Wrestling"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[7]?.attributes?.title}
                className="object-cover"
                src="https://media.kitsu.io/anime/poster_images/8384/medium.jpg"
                width={270}
                height={380}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[7]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            to="/Catagory/Samurai"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[8]?.attributes?.title}
                className="object-cover"
                src="https://media.kitsu.io/anime/poster_images/7907/medium.jpg"
                width={270}
                height={380}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[8]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            to="/Catagory/Elf"
            isFooterBlurred
            radius="lg"
            className="border-none box"
          >
            <Card>
              <Image
                alt={data[9]?.attributes?.title}
                className="object-cover"
                src="https://media.kitsu.io/anime/poster_images/11028/medium.jpg"
                width={270}
                height={380}
              />
              <CardFooter className="justify-center bg-white/60 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-xl text-white bg-black/60"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {data[9]?.attributes?.title}
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
